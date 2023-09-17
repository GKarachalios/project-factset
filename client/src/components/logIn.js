import { useState } from "react";
import "./logIn.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function LogIn(props) {
  //using navigation to go to another page
  let navigate = useNavigate();

  //getting username value
  const [username, setUsername] = useState("");

  const handleUserName = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  //getting password value
  const [password, setPassword] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  //sending values for validation and checking if the credentials are correct

  const LogIn = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:9000/api/login", {
          username,
          password,
        })
        .then((res) => {
          console.log(res);

          if (res.data === "exist") {
            alert("Login Succesfully");
            navigate("/currencies");
          } else {
            alert("Login failed,Please enter the right credentials");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={props.onClose}></div>
      <div className="modal-content">
        <form className="submit-form" action="POST">
          <label className="amount">Username</label>
          <input
            className="amount-box"
            onChange={handleUserName}
            type="text"
            placeholder="Please enter your amount"
          ></input>
          <label className="converted-amount">Password</label>
          <input
            className="converted-amount-box"
            onChange={handlePassword}
            type="text"
            placeholder="your converted amount"
          ></input>
          <div className="login-btns">
            <button className="btn btn-login" onClick={LogIn}>
              LogIn
            </button>

            <button className=" btn btn-login" onClick={props.onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LogIn;
