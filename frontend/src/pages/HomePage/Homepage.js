import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <div>
            <button href="#home">Signup</button>
          </div>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#news" className="logo">MEDHELP</a>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
