import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import '../css/components.css'
import UserLocation from "./UserLocation";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>RENT NOW</h2>
        <UserLocation/>
      </div>
      <div className="navbar-links">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">FAQs</Link>
          </li>
          <li>
            <Link to="/">Category</Link>
          </li>
        </ul>
        <div className="login-signup">
          <Link to={""} className="sign-up">Sign up</Link>
          <button>Login</button>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
