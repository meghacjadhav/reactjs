import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <div className="main">
        <img src={props.employee.profileImg} alt="profileImg" />
        <p id="Name">{props.employee.name}</p>
        <p className="Title">Location</p>
        <p className="data">{props.employee.location}</p>
        <p className="Title">Blood Group</p>
        <p className="data">{props.employee.bloodGroup}</p>
        <p className="Title">Age</p>
        <p className="data">{props.employee.age}</p>
      </div>
    </div>
  );
};

export default App;
