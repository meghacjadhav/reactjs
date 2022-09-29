import React from "react";
import "./OrderInfo.css";
import { GoPrimitiveDot } from "react-icons/go";
function OrderInfo(props) {
  return (
    <>
      <div id="mainOrder">
        <div className="orderTitle">Status</div>
        <div className="orderTitle">Door</div>
        <div className="orderTitle">Time</div>
        <div className="orderValue">
          {" "}
          <GoPrimitiveDot />
          {props.user.status}
        </div>

        <div className="orderValue">{props.user.door}</div>

        <div className="orderValue">
          {props.user.time.tym}
          <span id="date">{props.user.time.date}</span>
        </div>
      </div>
    </>
  );
}

export default OrderInfo;
