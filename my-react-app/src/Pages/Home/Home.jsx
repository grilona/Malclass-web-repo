import { Link } from "react-router-dom";
import "./Home.css";
import React from "react";
const Home = () => {
  return (
    <div className="home">
        <h1>Enter a file</h1>
        <h1>and discover the truth</h1>
        <a href="/UploadFile" id="button">Upload a file</a>

    </div>
  );
};

export default Home;
