import React from "react";
import "../CSS/PostView.css";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";

function PostView({ data }) {
  return (
    <>
      <div className="mainPostView">
        {data &&
          data.map((item, index) => (
            <div key={index} className="postViewContainer">
              <p id="firstCont">
                <span id="name">{item.name}</span>
                <span id="location">{item.location}</span>
                <span id="dots">
                  <BsThreeDots />
                </span>
              </p>
              <img src={item.PostImage} alt="PostImage" id="secCont" />
              <p id="thirdCont">
                <span id="heart">
                  <BsHeart />
                </span>
                <span id="rocket">
                  <IoMdPaperPlane />
                </span>
                <span id="date">{item.date}</span>
              </p>
              <p id="likes">{item.likes} likes </p>
              <p id="desc">{item.description}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default PostView;
