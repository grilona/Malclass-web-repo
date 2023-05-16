import "./About.css";

import React from "react";

const About = () => {
  return (
    <div className="about">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div class="container">
        <div class="row">
          <div class="col">
            <div className="right">
              <h1>We will help you</h1>
              <h1>Feel free to contct us:</h1>
              <h2>greener@gmail.com</h2>
              <a href="https://il.linkedin.com/">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/?lang=en">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i class="fa fa-facebook"></i>
              </a>
            </div>
          </div>
          <div class="col">
            <div className="left">
              <img
                src="https://media.istockphoto.com/id/1130299327/vector/shield-security-with-lock-symbol.jpg?s=612x612&w=0&k=20&c=rvd6dfbMWPVRrZrp40b87CEFiYBY7QOTAX2S7Q7pUdw="
                alt="photo1"
                id="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
