import React from "react";
import config from "../../../config/index";
function Logo() {
  return (
    <a className="logo" href={config.preLink + "/"} title="0xFantomPanda">
      <img src={require("../img/logo.svg")} alt="logo" />
      <h2>FantomPandas</h2>
    </a>
  );
}
export default Logo;
