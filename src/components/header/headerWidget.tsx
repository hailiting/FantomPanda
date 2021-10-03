import React from "react";
// import { Link } from "react-router-dom";
import config from "../../config/index";
import "./headerWidget.less";
function HeaderWidget() {
  return (
    <div className="header">
      <div className="headerWidget">
        <a href={config.preLink + "/"} title="0xFantomPanda">
          <img src={require("./img/logo.svg")} alt="logo" />
          <h2>FantomPandas</h2>
        </a>
        <a href="#Story" title="Story">
          Story
        </a>
        <a href="#PandaRaces" title="Panda Races">
          Panda Races
        </a>
        <a href="#Roadmap" title="Roadmap">
          Roadmap
        </a>
        <a href="#Team" title="Team">
          Team
        </a>
        <a href="#FAQ" title="FAQ">
          FAQ
        </a>
      </div>
    </div>
  );
}
export default HeaderWidget;
