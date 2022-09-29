import Header from "./Components/Header";
import PostView from "./Components/PostView";
import React, { useEffect, useState } from "react";

const App = () => {
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
    <div className="App">
      <Header />
      {userInfo && <PostView data={userInfo} />}
    </div>
  );
};

export default App;
