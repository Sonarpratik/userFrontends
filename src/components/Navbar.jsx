import React from 'react';
import { Link } from 'react-router-dom';
// import logo from "../images/p2.png";

const Navbar = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={"/"}>
 1000<s className='logo'>SUNNY</s>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active custom-nav" >
        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item custom-nav">
        <Link className="nav-link" to={"/about"}>About</Link>
      </li> 
      <li className="nav-item custom-nav">
        <Link className="nav-link" to={"/contact"}>Contact</Link>
      </li>
      <li className="nav-item custom-nav">
        <Link className="nav-link" to={"/login"}>Login</Link>
      </li>
      <li className="nav-item custom-nav">
        <Link className="nav-link" to={"/register"}>Register</Link>
      </li>
      <li className="nav-item custom-nav">
        <Link className="nav-link" to={"/appointment"}>Appointments</Link>
      </li>
      <li className="nav-item custom-nav">
        <Link className="nav-link" to={"/logout"}>Logout</Link>
      </li>
    
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
