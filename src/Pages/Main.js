import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import Footer from "../Components/Footer/Footer";
import Testimonials from "../Components/Testimonials/Testimonials";
import Benefits from "../Components/BenefitsSection/Benefits";
import BenefitsReversed from "../Components/BenefitsSection/BenefitsReversed";
import Industry from "../Components/Industry/Industry";
const Main = () => {
  return (
    <Loader>
      <div className="main">
        <div className="topSection">
          <Header page={"home"} />
          <div className="topContent">
            <div className="topContentText">
              <div className="contentHead">
                <p>Digital Transformation</p>
              </div>
              <div className="contentMain">
                <p>Catalyst To, Elevate.</p>
              </div>
              <div className="contentDesc">
                We are the catalyst that fuels unparalleled elevation converting
                you digitally, prospelling aspirations to remarkable heights.
                Our unwavering commitment to develop website and mobile
                application expertise serves as a driving force behind
                transformative solutions. With us, witness the power to
                transcend limits of digitalization.
              </div>
              <div className="contentQuote">
                <button>Get Started</button>
              </div>
            </div>
            <div className="topContentImage">
              <img src="assets/main/banner.png" />
            </div>
          </div>
        </div>
        <div className="featureSection">
          <div className="featureHeaderText">
            <p>Our featured solutions</p>
          </div>
          <div className="featureHeaderDesc">
            <p>
              Dive into a realm of custom-built web and mobile applications,
              designed to revolutionize your online presence. Our solutions
              blend creativity with functionality to redefine digital
              experiences.
            </p>
          </div>
          <div className="featuresContainer">
            <div className="featureUnit">
              <img src="assets/features/feature2.png" />
              <div className="featureUnitHeader">
                <p>Hospitality</p>
              </div>
              <div className="featureUnitDesc">
                <p>
                  From rent collection to maintenance requests, our app
                  simplifies landlord-tenant interactions. Offering tenants a
                  user-friendly platform for hassle-free renting experiences
                </p>
              </div>
            </div>
            <div className="featureUnit">
              <img src="assets/features/feature1.png" />
              <div className="featureUnitHeader">
                <p>Education</p>
              </div>
              <div className="featureUnitDesc">
                <p>
                  Empower your academic journey with our student tutor mobile
                  app. From homework help to exam preparation, access a
                  convenient and effective learning platform tailored to your
                  needs.
                </p>
              </div>
            </div>
            <div className="featureUnit">
              <img src="assets/features/feature3.png" />
              <div className="featureUnitHeader">
                <p>E-Commerce</p>
              </div>
              <div className="featureUnitDesc">
                <p>
                  Simplify your e-commerce operations with our order management
                  system. It centralizes and automates tasks, ensuring efficient
                  order processing and inventory control.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Benefits />

        <div className="pointsSection">
          <div className="pointsLeft">
            <div className="pointLeftUnit">
              <div className="pointsLeftTop">
                <p>Customer-Centric Approach</p>
                <img src="assets/points/icon1.png" />
              </div>
              <div className="pointsLeftDesc">
                <p>
                  Establishing strong client relationships through effective
                  communication, understanding client goals, and delivering
                  tailored, high-quality solutions.
                </p>
              </div>
            </div>
            <div className="pointLeftUnit">
              <div className="pointsLeftTop">
                <p>Scalability and Flexibility</p>
                <img src="assets/points/icon2.png" />
              </div>
              <div className="pointsLeftDesc">
                <p>
                  Building solutions that are scalable, adaptable, and capable
                  of accommodating growth and evolving business needs.
                </p>
              </div>
            </div>
            <div className="pointLeftUnit">
              <div className="pointsLeftTop">
                <p>Robust Security Measures</p>
                <img src="assets/points/icon3.png" />
              </div>
              <div className="pointsLeftDesc">
                <p>
                  Implementing stringent security protocols to safeguard client
                  data and ensure the integrity and safety of developed
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="pointsMiddle">
            <img src="assets/points/pointsPhone.jpg" />
          </div>
          <div className="pointsRight">
            <div className="pointRightUnit">
              <div className="pointsRightTop">
                <img src="assets/points/icon4.png" />
                <p>Agile Development Practices</p>
              </div>
              <div className="pointsRightDesc">
                <p>
                  Embracing agile methodologies for rapid iterations, enabling
                  responsiveness to client feedback and market shifts.
                </p>
              </div>
            </div>
            <div className="pointRightUnit">
              <div className="pointsRightTop">
                <img src="assets/points/icon5.png" />
                <p> Diverse Technologies</p>
              </div>
              <div className="pointsRightDesc">
                <p>
                  Proficiency across various tech stacks and platforms to
                  develop versatile and scalable solutions tailored to client
                  needs.
                </p>
              </div>
            </div>
            <div className="pointRightUnit">
              <div className="pointsRightTop">
                <img src="assets/points/icon6.png" />
                <p>User-Centric Design</p>
              </div>
              <div className="pointsRightDesc">
                <p>
                  Prioritizing user experience and interface design, ensuring
                  intuitive and engaging websites and apps that resonate with
                  target audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Industry />
        <Testimonials />
        <Footer />
      </div>
    </Loader>
  );
};

export default Main;
