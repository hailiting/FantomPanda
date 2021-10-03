import React, { useState } from "react";
import "./partthree.less";
export default function PartThree() {
  const [liIndex, setLiIndex] = useState(0);
  const liList = [
    {
      flImg: require("../assets/races_01.png"),
      frImg01: require("../assets/races_0101.png"),
      frImg02: require("../assets/races_0102.png"),
      frImg03: require("../assets/races_0103.png"),
      title: "Earthbind spirit",
      details: [
        "Earthbound spirits are a group of pandas with a kind nature, however because they are earthbound spirits, they are guarded against offenders who enter the spiritual realm. ",
        "Fortunately, they all have the same goal: to find and smelt the rough soul stone. ",
        "Cast the blood of the spiritual bridge and build the spiritual bridge from Niemandsland to the eternal paradise.",
      ],
    },
    {
      flImg: require("../assets/races_02.png"),
      frImg01: require("../assets/races_0201.png"),
      frImg02: require("../assets/races_0202.png"),
      frImg03: require("../assets/races_0203.png"),
      title: "Earthbind spirit",
      details: [
        "Spirit devourers are a bunch of bad boys, villains in the chaos world.They have no intention to ascend to the eternal paradise.After breaking away from the identity of the earthbound spirit, they also lose the protection and bondage of the earth center force in the chaos world.They are intoxicated, and their unconscious behavior cannot judge they are good or evil.The smell of blood from Spiritual Rocks tempt their inner desires all the time, making them purely devourers.",
      ],
    },
    {
      flImg: require("../assets/races_03.png"),
      frImg01: require("../assets/races_0301.png"),
      frImg02: require("../assets/races_0302.png"),
      frImg03: require("../assets/races_0303.png"),
      title: "Earthbind spirit",
      details: [
        "The Guardian of Order does not believe in the existence of eternal heaven, nor does it intend to turn this plane into an abyss of desire. They prefer to believe that the plane of the chaos world is the only world, and requires the creatures in this world to maintain the status quo and historical traditions, and oppose Those radical changes in any form advocate the establishment of a completely ordered world.",
      ],
    },
    {
      flImg: require("../assets/races_04.png"),
      frImg01: require("../assets/races_0401.png"),
      frImg02: require("../assets/races_0402.png"),
      frImg03: require("../assets/races_0403.png"),
      title: "Earthbind spirit",
      details: [
        "Lords have a wider territories than ordinary earth-bound spirits. Those earth-bound spirits with sufficient power can choose to become the earth gods of the chaos world (they are the only gods in the land of earth gods), and Lords are the last form of earth-bound spirits before they becoming the earth gods.",
      ],
    },
  ];
  return (
    <div className="part_three" id="PandaRaces">
      <div className="part_three_inner">
        <h2>Panda Races</h2>
        <ul className="tab_header">
          {[
            "Earthbind Spirit",
            "Spirit Devourer",
            "Guardian of Order",
            "Lords",
          ].map((v: string, index: number) => (
            <li
              className={index === liIndex ? "onLi" : ""}
              onClick={() => {
                setLiIndex(index);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
        <div className="show_detail">
          <div className="fl">
            <img src={liList[liIndex].flImg} alt="races" />
          </div>
          <div className="fr">
            <h4>{liList[liIndex].title}</h4>
            {liList[liIndex].details.map((v) => (
              <p>{v}</p>
            ))}
            <ul>
              <li>
                <img src={liList[liIndex].frImg01} alt="races" />
              </li>
              <li>
                <img src={liList[liIndex].frImg02} alt="races" />
              </li>
              <li>
                <img src={liList[liIndex].frImg03} alt="races" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
