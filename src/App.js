import "./App.css";
import { useState } from "react";

const App = () => {
  let [inputVal, updatedVal] = useState("");
  const handleClick = (e) => {
    updatedVal((inputVal += e.target.value));
  };
  const handleClear = (e) => {
    updatedVal((inputVal = ""));
  };
  const handleEqual = (e) => {
    updatedVal((inputVal = eval(inputVal)));
  };
  return (
    <div className="App">
      <p className="header">Calculator</p>
      <form className="myForm">
        <div className="main_calc">
          <div className="first_row">
            <input
              type="text"
              value={inputVal}
              name="input_box"
              className="input_box"
            />
            <input
              type="button"
              onClick={(e) => {
                handleClear(e);
              }}
              value="C"
              name="c_btn"
              className="btn side"
            />
          </div>
          <div className="sec_row">
            <input
              type="button"
              value="1"
              name="1_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="2"
              name="2_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="3"
              name="3_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="/"
              name="div_btn"
              className="btn side"
              onClick={(e) => {
                handleClick(e);
              }}
            />
          </div>
          <div className="third_row">
            <input
              type="button"
              value="4"
              name="4_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="5"
              name="5_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="6"
              name="6_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="-"
              name="sub_btn"
              className="btn side"
              onClick={(e) => {
                handleClick(e);
              }}
            />
          </div>
          <div className="fourth_row">
            <input
              type="button"
              value="7"
              name="7_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="8"
              name="8_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="9"
              name="9_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="+"
              name="add_btn"
              className="btn side"
              onClick={(e) => {
                handleClick(e);
              }}
            />
          </div>
          <div className="fifth_row">
            <input
              type="button"
              value="."
              name="point_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="0"
              name="0_btn"
              className="btn mid"
              onClick={(e) => {
                handleClick(e);
              }}
            />
            <input
              type="button"
              value="="
              name="equals_btn"
              className="btn mid"
              onClick={(e) => {
                handleEqual(e);
              }}
            />
            <input
              type="button"
              value="*"
              name="mul_btn"
              className="btn side"
              onClick={(e) => {
                handleClick(e);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
