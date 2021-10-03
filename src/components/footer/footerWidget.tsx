import React from "react";
import "./footerWidget.less";
function FooterWidget() {
  return (
    <div className="footer">
      <img src={require("./img/logo.svg")} alt="logo" />
      <h3>FantomPandas</h3>
      <h4>
        Made with{" "}
        <span role="img" aria-label="Panda">
          🎋
        </span>
        by FantomPandas Team
      </h4>
    </div>
  );
}
export default FooterWidget;
