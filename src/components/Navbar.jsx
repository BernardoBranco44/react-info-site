import React from "react";
import logo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="react logo" />
      <h1 id="title">ReactFacts</h1>
      <h2>React Course - Project 1</h2>
    </div>
  );
}
