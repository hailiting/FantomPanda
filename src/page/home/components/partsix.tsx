import React from "react";
import "./partsix.less";
export default function PartSix() {
  return (
    <div id="Team" className="partsix">
      <h2>The Team</h2>
      <ul>
        <li>
          <img src={require("../assets/six01.png")} alt="Tim Alle" />
          <h3>Tim Alle</h3>
          <p>Panda Artist</p>
        </li>
        <li>
          <img src={require("../assets/six02.png")} alt="Francis" />
          <h3>Francis</h3>
          <p>NFT Collector</p>
        </li>
        <li>
          <img src={require("../assets/six03.png")} alt="Horace" />
          <h3>Horace</h3>
          <p>Socialite</p>
        </li>
      </ul>
    </div>
  );
}
