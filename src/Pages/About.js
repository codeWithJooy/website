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
              <p>Beyond Websites:Building Digital Experiences That Resonate</p>
            </div>
            <div className="aboutTextMain">
              <p>We are Elevance Tech, a passionate team dedicated to crafting innovative mobile and web solutions. With many products and websites, we have honed our expertise in developing user-centric web and mobile applications cross various domains.</p>
            </div>
            <br />
            <div className="aboutTextMain">
              <p>Our journey has been fueled by a commitment to delivering high-quality apps that not only meet but exceed our client’s expectations. From home-based business units to enterprise, we’ve had the privilege of working with diverse business, creating unique and impactful experience.</p>
            </div>
            <br/>
            <div className="aboutTextMain">
              <p>We are here to share our insights, learn from the community, and offer our expertise in the ever evolving world of web and mobile app development.</p>
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
        
        <Team />
        <Testimonials />
        <Footer />
      </div>
    </Loader>
  );
};

export default About;
