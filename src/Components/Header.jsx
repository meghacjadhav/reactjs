import React from "react";
import "./Header.css";
import { BsChevronLeft } from "react-icons/bs";
function Header(props) {
  return (
    <>
      <div id="mainHeader">
        <div id="headerLeft">
          <BsChevronLeft />
        </div>
        <div id="headerCenter">
          <p className="name">{props.user.name}</p>
          <p className="empid">{props.user.employeeId}</p>
        </div>
        <div id="headerRight">
          {" "}
          <button className="btn">Print</button>
        </div>
      </div>
    </>
  );
}

export default Header;
