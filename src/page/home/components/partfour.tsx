import React from "react";
import "./partfour.less";
export default function PartFour() {
  return (
    <div className="partfour" id="Roadmap">
      <div className="part_four_inner">
        <h2>The Roadmap</h2>
        <div className="part10">
          <h3>
            <img
              src={require("../assets/four01.png")}
              alt="10% Sold ----- Tim Allen's obsession"
            />
            10% Sold ----- Tim Allen's obsession
          </h3>
          <div className="border">
            <h5>"DON'T TOUCH IT !" ---- Tim Allen</h5>
            <p>
              "One of the first 80 pandas contains a hand-printed rare panda.
              This panda was not intended for sale (you can’t imagine how we
              persuaded Tim Allen to agree to this request, Tim Allen is a
              lunatic!!!), if you got it, congratulations to You, Tim Allen will
              recycle it at ten times the price of the mint, and will give you
              an extra NFT as compensation in the next version." ---- Francis
            </p>
          </div>
        </div>

        <div className="part25">
          <h3>
            <img
              src={require("../assets/four02.png")}
              alt="25% Sold ---- The gifts from the community"
            />
            25% Sold ---- The gifts from the community
          </h3>
          <div className="border">
            <p>
              There is nothing to be proud of. Those who understand art know
              that they are worth having." ---- Tim Allen
            </p>
            <p>
              "Thanks to everyone who has followed FantomPanda. We will select
              five collectors from the community who joined discord and made
              contributions first, and give them 500 FTM each." ---- Francis
            </p>
          </div>
        </div>

        <div className="part50">
          <h3>
            <img
              src={require("../assets/four03.png")}
              alt="50% Sold ---- Some tokens and the next NFT"
            />
            50% Sold ---- Some tokens and the next NFT
          </h3>
          <div className="border">
            <p>
              "Congratulations to the first 400 Pandas owners. With your first
              mint address, you can claim 80000 $FPD tokens, and $FPD can be
              exchanged for the next generation of NFT." ---- Horace
            </p>
          </div>
        </div>
        <div className="part75">
          <h3>
            <img
              src={require("../assets/four04.png")}
              alt="75% Sold ---- Embrace Defi and Token"
            />
            75% Sold ---- Embrace Defi and Token
          </h3>
          <div className="border">
            <p>
              "You can enter the mining pool, staking Panda to get some $FPD,
              and receive Panda's passive income every week." ---- Horace
            </p>
          </div>
        </div>
        <div className="part100">
          <h3>
            <img
              src={require("../assets/four05.png")}
              alt="100% Sold ---- Interesting ideas and things to do"
            />
            100% Sold ---- Interesting ideas and things to do
          </h3>
          <div className="border">
            <p>
              "I will design some Pandas gifts and put them in the Panda store.
              There will be 10 collectors can get free exclusive gifts."
            </p>
            <p>
              "There will be the next version of NFT, Fantompanda holders will
              get the benefits of the next project, maybe NFT or tokens? As long
              as it does not disrupt the future story line, let Francis decide."
            </p>
            <p>---- Tim Allen</p>
            <p>
              "Starting the Panda Alchemy Project, we are considering adding
              attributes or other NFTs to enrich the world." ---- Francis
            </p>
            <p>
              "We plan to use ERC 1155 and EIP 3664 to enrich the NFT Metaverse
              produced by Tim Allen. Just as some JPGs, it seems to me a waste."
            </p>
            <p>---- Horace</p>
          </div>
        </div>
      </div>
    </div>
  );
}
