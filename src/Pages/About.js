import Header from "../Components/Header/Header";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import Team from "../Components/Team/Team";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";
import Benefits from "../Components/BenefitsSection/Benefits";
import BenefitsReversed from "../Components/BenefitsSection/BenefitsReversed";
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
              <p>We've Been Thriving for 3 Years The Tech Area</p>
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
        <Benefits />
        <BenefitsReversed />
        <Team />
        <Testimonials />
        <Footer />
      </div>
    </Loader>
  );
};

export default About;
