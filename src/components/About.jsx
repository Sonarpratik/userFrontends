import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/p2.png";

import "./css/about.css";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [name, setName] = useState();
  const [_id, setId] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const callAboutPage = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = response;
      const data1 = await response.json();
      setUserData(data1);
      setId(data1._id);
      // const a = await userData.json();
      setName(data1.name);
      setEmail(data1.email);
      setPhone(data1.phone);

      if (data.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      navigate("/login");
      console.log(err);
    }
  };

  const DID = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/about", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          name,
          email,
          phone,
          _id
        }),
      });
      const data = await response;
      if (data.status === 200) {
        window.alert("done");
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="a-con">

      <form method="GET" className="a-box">
        {/* <img className="img-move" src={logo} alt="" width={"200px"} height={"200px"}/> */}

        <div className="up-box">
        <span>HELLO</span>
        <h2>{name}</h2>
      </div>

      <div className="down-box">

        <form method="PATCH" className="a-right">
          <span>Name</span>
          <span>Email</span>
          <span>Phone no</span>
          <span>User id</span>
          {/* <p  >its me {name}</p> */}
        </form>

        <div className="a-right">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            value={_id}
            onChange={(e) => setId(e.target.value)}
          />
          {/* <p  >its me {name}</p> */}
        </div>
      </div>

        <button className="btn-move" onClick={DID}>
          edit profile
        </button>
      </form>
    </div>
  );
};

export default About;
