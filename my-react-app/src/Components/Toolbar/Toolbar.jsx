import React, { useState } from "react";
import "./Toolbar.scss";
import logo from "./logo.jpg";


import { Link } from "react-router-dom";

const Toolbar = (props) => {

  return (
    <div className="topnav">
      <Link to={"/"} className={"btn"}>
        <img src={logo} id="logo" alt="logo" />
      </Link>


    </div>
  );
};

export default Toolbar;
