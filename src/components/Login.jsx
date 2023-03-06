import React from "react";
import "./css/login.css";
// import logo from "../images/in.png";
import login from "../images/login.png";
import lock from "../images/lock.png";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data =await response;
        if(data.status===404){
            window.alert("Invalid Credentials")
        }else if(data.status===201){
                window.alert("Login SuccessFull");
navigate("/")

        }else{
            window.alert("lock Down Procedure Exit The page Fast")
        }
};
  return (
    <div className="login">
      <div className="login-box">
        <form className="login-box-left" method="POST">
          <h3>Sign In</h3>
          <div className="in-line">
            {" "}
            <label htmlFor="name">
              <img src={login} width="20px" alt="" />
            </label>{" "}
            <input
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="done"
              type="email"
              placeholder="Enter Your Email"
              required={true}
            />
          </div>
          <div className="in-line">
            <label htmlFor="password">
              {" "}
              <img src={lock} width="20px" alt="" />{" "}
            </label>
            <input
              required={true}

              autoComplete="off"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="done"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <input
            type="submit"
            name="signin"
            id="signin"
            className="btn-login"
            onClick={loginUser}
            value={"Login"}
          />
        </form>
        <div className="login-box-right"></div>
      </div>
    </div>
  );
};

export default Login;
