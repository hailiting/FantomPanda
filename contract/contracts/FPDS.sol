// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract FPDSNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    string public baseTokenURI;
    uint256 public price = 0.05 ether;
    uint256 public saleState = 0; // 0 = paused, 1 = presale, 2 = live
    uint256 public constant MAX_PANDAS = 1200;

    // withdraw addresses
    address[] public adminList;

    // List of addresses that have a number of reserved tokens for presale
    mapping(address => uint256) public preSaleReserved;

    constructor(string memory baseURI) ERC721("FantomPandas", "FPDS") {
        setBaseURI(baseURI);
    }

    // Override so the openzeppelin tokenURI() method will use this method to create the full tokenURI instead
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function mint(uint256 num) public payable {
        uint256 supply = totalSupply();
        require(saleState > 1, "Sale not live");
        require(num < 10, "You can mint a maximum of 10 fantastic Pandas");
        require(supply + num <= MAX_PANDAS, "Exceeds maximum Pandas supply");
        require(msg.value >= price * num, "Ether sent is not correct");

        for (uint256 i; i < num; i++) {
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

    // Edit reserved presale spots
    function setPreSaleWhitelist(address[] memory _a) public onlyOwner {
        for (uint256 i; i < _a.length; i++) {
            preSaleReserved[_a[i]] = 10;
        }
    }

    function setPrice(uint256 _newPrice) public onlyOwner {
        price = _newPrice;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

    function giveAway(address _to, uint256 _num) external onlyOwner {
        uint256 supply = totalSupply();
        for (uint256 i; i < _num; i++) {
            _safeMint(_to, supply + i);
        }
    }

    function setSaleState(uint256 _saleState) public onlyOwner {
        saleState = _saleState;
    }

    function setAddresses(address[] memory _f) public onlyOwner {
        adminList = _f;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        uint256 len = adminList.length;
        if (len > 0) {
            uint256 _each = balance / adminList.length;
            for (uint256 i = 0; i < adminList.length; i++) {
                require(payable(adminList[i]).send(_each));
            }
        }
    }
}
