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
                <p>Artificial Intelligence (AI)</p>
              </div>
              <div className="contentMain">
                <p>Work smarter, together.</p>
              </div>
              <div className="contentDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="featuresContainer">
            <div className="featureUnit">
              <img src="assets/features/feature1.png" />
              <div className="featureUnitHeader">
                <p>Departments</p>
              </div>
              <div className="featureUnitDesc">
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>
            <div className="featureUnit">
              <img src="assets/features/feature2.png" />
              <div className="featureUnitHeader">
                <p>Departments</p>
              </div>
              <div className="featureUnitDesc">
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>
            <div className="featureUnit">
              <img src="assets/features/feature3.png" />
              <div className="featureUnitHeader">
                <p>Departments</p>
              </div>
              <div className="featureUnitDesc">
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Benefits />
        <BenefitsReversed />
        <div className="pointsSection">
          <div className="pointsLeft">
            <div className="pointLeftUnit">
              <div className="pointsLeftTop">
                <p>Market Analysis</p>
                <img src="assets/points/icon1.png" />
              </div>
              <div className="pointsLeftDesc">
                <p>
                  Lorem ipsum dolor sit amet consem et ctetuering adipisc elit
                  sed diam.
                </p>
              </div>
            </div>
            <div className="pointLeftUnit">
              <div className="pointsLeftTop">
                <p>Financial Advise</p>
                <img src="assets/points/icon2.png" />
              </div>
              <div className="pointsLeftDesc">
                <p>
                  Lorem ipsum dolor sit amet consem et ctetuering adipisc elit
                  sed diam.
                </p>
              </div>
            </div>
            <div className="pointLeftUnit">
              <div className="pointsLeftTop">
                <p>Market Analysis</p>
                <img src="assets/points/icon3.png" />
              </div>
              <div className="pointsLeftDesc">
                <p>
                  Lorem ipsum dolor sit amet consem et ctetuering adipisc elit
                  sed diam.
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
                <p>Market Analysis</p>
              </div>
              <div className="pointsRightDesc">
                <p>
                  Lorem ipsum dolor sit amet consem et ctetuering adipisc elit
                  sed diam.
                </p>
              </div>
            </div>
            <div className="pointRightUnit">
              <div className="pointsRightTop">
                <img src="assets/points/icon5.png" />
                <p>Financial Advise</p>
              </div>
              <div className="pointsRightDesc">
                <p>
                  Lorem ipsum dolor sit amet consem et ctetuering adipisc elit
                  sed diam.
                </p>
              </div>
            </div>
            <div className="pointRightUnit">
              <div className="pointsRightTop">
                <img src="assets/points/icon6.png" />
                <p>Market Analysis</p>
              </div>
              <div className="pointsRightDesc">
                <p>
                  Lorem ipsum dolor sit amet consem et ctetuering adipisc elit
                  sed diam.
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
