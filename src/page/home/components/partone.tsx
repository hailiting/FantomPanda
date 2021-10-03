import React from "react";
import HeaderWidget from "@/components/header/headerWidget";
import "./partone.less";
export default function PartOne() {
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
            <p>0/1200 minted</p>
          </div>
          <div className="fr">
            <p>
              <i></i>Coming Soon
            </p>
          </div>
        </div>
        <div className="form_bg"></div>
        <div className="input">
          <p>Quantity:</p>
          <input />
          <p className="fr">(max. 20 per tx)</p>
        </div>
        <h5>
          Mint Price: <i>TBD</i>
        </h5>
        <button>Coming Soon</button>
      </div>
      <div className="link">
        <a href="https://twitter.com/fantompandas?s=21" title="fantompandas">
          Twitter
        </a>
        <a
          href="https://discord.com/invite/ZndapmRWZZ"
          title="https://discord.com/invite/ZndapmRWZZ"
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
