import React from "react";
import "./parttwo.less";
export default function PartTwo() {
  return (
    <div className="part_two" id="Story">
      <div className="part_two_inner">
        <div className="fl">
          <ul className="frist">
            <li className="shadow">
              <img src={require("../assets/01.png")} alt="FantomPanda" />
            </li>
            <li>
              <img src={require("../assets/02.png")} alt="FantomPanda" />
            </li>
            <li>
              <img src={require("../assets/03.png")} alt="FantomPanda" />
            </li>
            <li>
              <img src={require("../assets/04.png")} alt="FantomPanda" />
            </li>
          </ul>
          <ul className="second">
            <li>
              <img src={require("../assets/05.png")} alt="FantomPanda" />
            </li>
            <li>
              <img src={require("../assets/06.png")} alt="FantomPanda" />
            </li>
            <li>
              <img src={require("../assets/07.png")} alt="FantomPanda" />
            </li>
            <li className="shadow">
              <img src={require("../assets/08.png")} alt="FantomPanda" />
            </li>
          </ul>
        </div>
        <div className="fr">
          <h3>The Story</h3>
          <p>
            In the endless Fantom universe, many elven planes are shining with
            different lights. Before the souls of the Pandas have yet to ascend,
          </p>
          <p>
            They are still wandering in this universe called the Chaos World.
          </p>
          <p>
            Some pandas use the wisdom bestowed by Tim Allen to try to establish
            a way to ascend, and some pandas use their warrior spirit and power
            to guard their territories...
          </p>
        </div>
      </div>
    </div>
  );
}
