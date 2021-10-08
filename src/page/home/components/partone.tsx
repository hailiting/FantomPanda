import React, { useEffect, useState } from "react";
import HeaderWidget from "@/components/header/headerWidget";
import "./partone.less";
import {
  NFTPrice,
  NFTState,
  NFTMax,
  NFTTotalSupply,
  getETHBalance,
  getAccounts,
  mint,
  preSaleMint,
  NFTAllow,
} from "@/services/web3";
import Toast from "@/components/toast";
export default function PartOne() {
  const [ERC721Price, setERC721Price] = useState("-");
  const [ERC721State, setERC721State] = useState("0");
  const [ERC721Max, setERC721Max] = useState("1200");
  const [ERC721TotalSupply, setERC721TotalSupply] = useState("0");
  const [mintValue, setMintValue] = useState(1);
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [account, setAccount] = useState("");
  const [ETHBalance, setETHBalance] = useState("");

  useEffect(() => {
    (async () => {
      setAccounts(await getAccounts());
      setERC721Price(await NFTPrice());
      setERC721State(await NFTState());
      setERC721Max(await NFTMax());
      setERC721TotalSupply(await NFTTotalSupply());
    })();
  }, []);
  useEffect(() => {
    if (accounts === null) return;
    if (accounts.length === 0) return;
    setAccount(accounts[0]);
    (async () => {
      setETHBalance(await getETHBalance(accounts[0]));
    })();
  }, [accounts]);
  return (
    <div className="partone">
      <HeaderWidget />
      <h1>Welcome to FantomPanda</h1>
      <h3>
        Width 1017px Height 53px Top 298px Left 452px Blend Pass through
        FantomPanda is a collection of randomly generated NFT characters living
        on the Fantom blockchain. 1200 Pandas are created from over 200
        hand-crafted traits. Each FantomPanda is 1/1 unique and can be
        customized.
      </h3>
      <div className="form">
        <h4>Mint a Panda</h4>
        <div className="label">
          <div className="fl">
            <p>
              {ERC721TotalSupply}/{ERC721Max} minted
            </p>
          </div>
          <div className="fr">
            <p>
              <i></i>
              {+ERC721State === 1
                ? "PreSale"
                : +ERC721State === 2
                ? "Sale"
                : +ERC721State === 0
                ? "Coming Soon"
                : ""}
            </p>
          </div>
        </div>
        <div className="form_bg"></div>
        <div className="input">
          <p>Quantity:</p>
          <input
            value={mintValue}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setMintValue(Number(e.target.value));
              }
            }}
          />
          <p className="fr">(max. 10 per tx)</p>
        </div>
        <h5>
          Mint Price:{" "}
          <i>
            {+ERC721State >= 0
              ? `${
                  isNaN(+ERC721Price)
                    ? ERC721Price
                    : +ERC721Price / Math.pow(10, 18)
                } FTM`
              : "TBD"}
          </i>
        </h5>
        <button
          onClick={async () => {
            let _price = await NFTPrice();
            if (_price !== ERC721Price) {
              setERC721Price(_price);
            }
            if (!ERC721State) {
              Toast.show("The contract has not yet opened, so stay tuned!");
              return false;
            }
            if (
              Number(ETHBalance) * Math.pow(10, 18) <
              Number(_price) * mintValue
            ) {
              Toast.show(
                `Insufficient balance, current balance is ${ETHBalance}, NFT price：${
                  Number(_price) / Math.pow(10, 18)
                }`
              );
              return false;
            }
            if (+ERC721State > 0) {
              if (+ERC721State > 1) {
                mint({
                  numberOfTokens: `${mintValue}`,
                  price: `${_price}`,
                  account: account,
                });
              } else {
                const _allow = await NFTAllow(account);
                if (+_allow > 0) {
                  if (+_allow >= mintValue) {
                    preSaleMint({
                      numberOfTokens: `${mintValue}`,
                      price: `${_price}`,
                      account: account,
                    });
                  } else {
                    Toast.show(`You can currently purchase ${_allow} FPDS`);
                  }
                } else {
                  Toast.show("No permission!");
                  return false;
                }
              }
            } else {
              Toast.show("The contract has not yet opened, so stay tuned!");
              return false;
            }
          }}
        >
          Mint
        </button>
      </div>
      <div className="link">
        <a
          href="https://twitter.com/fantompandas?s=21"
          title="fantompandas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://discord.com/invite/ZndapmRWZZ"
          title="https://discord.com/invite/ZndapmRWZZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </div>
      <div className="next">
        <a href="#Story">
          <img src={require("../assets/icon_next.png")} alt="icon_next" />
        </a>
      </div>
    </div>
  );
}
