import Header from "../Components/Header/Header";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
const About = () => {
  return (
    <Loader>
      <div className="main">
        <div className="topSectionPage">
          <Header page={"about"} />
          <div className="topContentPage">
            <p className="topHeadingPage">About Us</p>
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default About;
