import React from "react";
import "./CustomerInfo.css";
function CustomerInfo(props) {
  return (
    <>
      <div id="main">
        <p className="customerTitle">
          Appointment{" "}
          <span className="customerValue">{props.user.appointment}</span>
        </p>
        <p className="customerTitle">
          Email: <span className="customerValue">{props.user.email}</span>
        </p>
        <p className="customerTitle">
          Phone <span className="customerValue">{props.user.phone}</span>
        </p>
      </div>
    </>
  );
}

export default CustomerInfo;
