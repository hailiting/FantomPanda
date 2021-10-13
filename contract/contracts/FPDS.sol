// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract FPDSNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    uint256 public price = 50000000000000000; // 0.05 ETH
    uint256 public maxPurchase = 10;
    uint256 public MAX_PANDAS = 1200;
    uint256 public _reserved = 10;
    string public _baseTokenURI;
    address admin;
    address[] public adminList;
    mapping(address => bool) public admins;

    bool public reserved = false;
    bool public allFrozen;
    mapping(uint256 => bool) frozenIds;
    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;
    event PriceChanged(uint256 price);
    event MaxTokenAmountChanged(uint256 value);
    event MaxPurchaseChanged(uint256 value);
    event PandasReserved();
    event PermanentURI(string _value, uint256 indexed _id);

    uint256 public saleState = 0; // 0 = paused, 1 = presale, 2 = live
    // List of addresses that have a number of reserved tokens for presale
    mapping(address => uint256) public preSaleReserved;

    modifier onReserve() {
        require(!reserved, "Tokens reserved");
        _;
        reserved = true;
        emit PandasReserved();
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Not admin");
        _;
    }

    constructor(address[] memory _admin) ERC721("FantomPandas", "FPDS") {
        for (uint256 i = 0; i < _admin.length; i++) {
            admins[_admin[i]] = true;
        }
        adminList = _admin;
    }

    function withdraw() public onlyAdmin {
        uint256 balance = address(this).balance;
        uint256 _each = balance / adminList.length;
        for (uint256 i = 0; i < adminList.length; i++) {
            require(payable(adminList[i]).send(_each));
        }
    }

    // Edit reserved presale spots
    function setPreSaleWhitelist(address[] memory _a) public onlyOwner {
        for (uint256 i; i < _a.length; i++) {
            preSaleReserved[_a[i]] = 10;
        }
    }

    function reservePandas(address _to, uint256 _amount)
        external
        onlyAdmin
        onReserve
    {
        require(_amount <= _reserved, "Exceeds reserved Cat supply");

        uint256 supply = totalSupply();
        for (uint256 i; i < _amount; i++) {
            _safeMint(_to, supply + i);
        }

        _reserved -= _amount;
    }

    function flipSaleState(uint256 _saleState) public onlyAdmin {
        saleState = _saleState;
    }

    function mint(uint256 num) public payable {
        uint256 supply = totalSupply();
        require(saleState > 1, "Sale not live");
        require(num > 0, "Cannot buy 0");
        require(
            num < maxPurchase + 1,
            "Exceeds max number of Pandas in one transaction"
        );
        require(
            supply + num < MAX_PANDAS - _reserved,
            "Purchase would exceed max supply of Pandas"
        );
        require(price.mul(num) <= msg.value, "Ether value sent is not correct");
        uint256 mintIndex;
        for (uint256 i; i < num; i++) {
            mintIndex = supply + i;
            _safeMint(msg.sender, supply + i);
        }
    }

    function preSaleMint(uint256 num) public payable {
        uint256 supply = totalSupply();
        uint256 reservedAmt = preSaleReserved[msg.sender];
        require(saleState > 0, "Presale isn't active");
        require(reservedAmt > 0, "No tokens reserved for address");
        require(num <= reservedAmt, "Can't mint more than reserved");
        require(supply + num <= MAX_PANDAS, "Exceeds maximum Pandas supply");
        require(msg.value >= price * num, "Ether sent is not correct");
        preSaleReserved[msg.sender] = reservedAmt - num;
        for (uint256 i; i < num; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    function getMyAssets(address _owner, uint256 index)
        public
        view
        returns (uint256)
    {
        uint256 tokensId = tokenOfOwnerByIndex(_owner, index);
        return tokensId;
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI)
        external
        onlyAdmin
    {
        require(!allFrozen && !frozenIds[tokenId], "Already frozen");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function setBaseTokenURI(string memory baseTokenURI_) external onlyAdmin {
        require(!allFrozen, "Already frozen");
        _baseTokenURI = baseTokenURI_;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setPrice(uint256 _price) external onlyAdmin {
        require(_price > 0, "Zero price");

        price = _price;
        emit PriceChanged(_price);
    }

    function setMaxTokenAmount(uint256 _value) external onlyAdmin {
        require(
            _value > totalSupply() && _value <= 10_000,
            "Wrong value for max supply"
        );

        MAX_PANDAS = _value;
        emit MaxTokenAmountChanged(_value);
    }

    function setMaxPurchase(uint256 _value) external onlyAdmin {
        require(_value > 0, "Very low value");

        maxPurchase = _value;
        emit MaxPurchaseChanged(_value);
    }

    function setReserveAmount(uint256 __reserved) external onlyAdmin {
        _reserved = __reserved;
    }

    function enableAdmin(address _addr) external onlyOwner {
        admins[_addr] = true;
    }

    function disableAdmin(address _addr) external onlyOwner {
        admins[_addr] = false;
    }

    function freezeAll() external onlyOwner {
        allFrozen = true;
    }

    function freeze(uint256 tokenId) external onlyOwner {
        frozenIds[tokenId] = true;

        emit PermanentURI(tokenURI(tokenId), tokenId);
    }
}
