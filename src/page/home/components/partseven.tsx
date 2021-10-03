import React, { useState } from "react";
import "./partseven.less";
interface LiListItem {
  title: string;
  details: string[];
}
export default function PartSeven() {
  const [liIndex, setIndex] = useState(0);
  const liList = [
    {
      title: "How do I get a FantomPandas?",
      details: [
        "You can get a randomly generated panda by clicking on the mint button on the webpage during the launch period ",
      ],
    },
    {
      title: "What is the total number of FantomPandas? ",

      details: ["There will be 1200 FantomPandas appearing "],
    },
    {
      title: "What is the price of the mint? ",

      details: ["The final mint price will be determined by a community vote "],
    },
    {
      title: "When will mint start? ",

      details: [
        "The time of Mint has not yet been determined, most likely it will start in early October ",
      ],
    },
    {
      title: "Can a panda be gifted? ",
      details: [
        "Of course, any FantomPandas can be gifted, it's as simple as sending an FTM to another wallet ",
      ],
    },
    {
      title: "What does holding a FantomPandas do? ",
      details: [
        "Good question, you should know that each FantomPandas is a ground-bound spirit that lives on one or some blocks, and they can generate some passive income in addition to bringing you collectible value (they are all spirits with their own stories). ",
      ],
    },
    {
      title: "What is the Panda Universe? ",
      details: [
        "As the timeline and story line progresses, these pandas will build a grand virtual world where the legends of the FantomPandas and more virtual assets exist ",
      ],
    },
    {
      title: "On which platform can I trade my FantomPandas? ",
      details: ["You can buy and resell your FantomPandas on Artion.io "],
    },
    {
      title: "Where can I get $FPD? ",
      details: [
        "The first 600 FantomPandas with mint addresses will receive a free airdrop of 80,000 $FPD. Stake your FantomPandas into the NFT pool to receive $FPD. ",
      ],
    },
    {
      title: "What does $FPD do? ",
      details: [
        "$FPD can be used to purchase the same series of NFTs created by Tim Allen. ",
      ],
    },
  ];
  return (
    <div id="FAQ" className="partseven">
      <h2>Time to get the FAQs</h2>
      <ul>
        {liList.map((v: LiListItem, index: number) => (
          <li>
            <div className="title">
              <h3>{v.title}</h3>
              <div
                className={index === liIndex ? "subtract btn" : "add btn"}
                onClick={() =>
                  index === liIndex ? setIndex(-1) : setIndex(index)
                }
              >
                {index === liIndex ? (
                  <img
                    src={require("../assets/icon_subtract.png")}
                    alt="showmore"
                  />
                ) : (
                  <img src={require("../assets/icon_add.png")} alt="showmore" />
                )}
              </div>
            </div>
            {index === liIndex ? (
              <div className="inner">
                {v.details.map((v) => (
                  <p>{v}</p>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
