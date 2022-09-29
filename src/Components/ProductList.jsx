import React from "react";
import "./ProductList.css";
import { BsChevronRight } from "react-icons/bs";
function ProductList(props) {
  return (
    <>
      <div id="mainProduct">
        <form>
          <input className="productCheck" type="checkbox"></input>{" "}
          <img src={props.user.profileImg} alt="profileImage" />
          <div>
            <p className="productTitle">{props.user.productName}</p>
            <p className="productValue">{props.user.productDesc}</p>
          </div>
          <div id="header_Right">
            <BsChevronRight />
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductList;
