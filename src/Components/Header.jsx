import React from "react";
import { GiAbstract013 } from "react-icons/gi";
import { FiCamera } from "react-icons/fi";
import "../CSS/Header.css";

function Header() {
  return (
    <>
      <div className="mainHeader">
        <div className="logo">
          <span id="logoIcon">
            <GiAbstract013 />
          </span>
          <span id="logoText">Instaclone</span>
        </div>
        <div className="camera">
          <FiCamera />
        </div>
      </div>
    </>
  );
}

export default Header;
