import React, { useState } from "react";
import "./headerWidget.less";
import Logo from "./components/logo";
import Menu from "./components/menu";
function HeaderWidget() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="header">
      <div className="headerWidget big">
        <Logo />
        <Menu />
      </div>
      <div className="headerWidget samll">
        <div className="fl">
          <Logo />
        </div>
        <div className="fr">
          <img
            className="close"
            onClick={() => setShowModal(!showModal)}
            src={require("./img/menu.png")}
            alt="logo"
          />
        </div>
      </div>
      {showModal ? (
        <div className="modal">
          <div className="clean">
            <div className="fl">
              <Logo />
            </div>
            <div className="fr">
              <img
                onClick={() => setShowModal(!showModal)}
                className="close"
                src={require("./img/close.png")}
                alt="logo"
              />
            </div>
          </div>
          <div className="menu" onClick={() => setShowModal(!showModal)}>
            <Menu />
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default HeaderWidget;
