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
        <div className="aboutUs">
          <div className="aboutText">
            <div className="aboutTextTop">
              <p>About Us</p>
            </div>
            <div className="aboutTextHeader">
              <p>We've Been Thriving in 37 Years The Tech Area</p>
            </div>
            <div className="aboutTextMain">
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
            <div className="aboutTextMain">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae scelerisque.</p>
            </div>
            <div className="aboutTextMain">
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
          <div className="aboutImage">
            <img src="assets/about/about.png" />
          </div>
        </div>
        <div className="aboutCardSection">
        <div className="aboutCard">
            <div className="aboutCardHeader">
               <p>Our History</p>
            </div>
            <div className="aboutCardDesc">
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
          <div className="aboutCard">
            <div className="aboutCardHeader">
               <p>Our History</p>
            </div>
            <div className="aboutCardDesc">
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
          <div className="aboutCard">
            <div className="aboutCardHeader">
               <p>Our History</p>
            </div>
            <div className="aboutCardDesc">
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default About;
