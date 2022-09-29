import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import PostView from "./PostView/PostView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [userInfo, setUserInfo] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3004/user")
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/post-view"
            element={userInfo && <PostView data={userInfo} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
