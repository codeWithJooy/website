import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
const Main = () => {
  return (
   <Loader>
     <div className="main">
      <div className="topSection">
        <Header page={"home"}/>
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
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
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
      <div className="pointsSection">
        <div className="pointsLeft">
          <div className="pointLeftUnit">
            <div className="pointsLeftTop">
              <p>Market Analysis</p>
              <img src="assets/points/icon1.png" />
            </div>
            <div className="pointsLeftDesc">
              <p>
                Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed
                diam.
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
                Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed
                diam.
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
                Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed
                diam.
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
                Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed
                diam.
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
                Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed
                diam.
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
                Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed
                diam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonialSection">
        <div className="testimonialHolder">
          <div className="testimonialHeader">
            <p>Trusted by over 250,000 business owners</p>
          </div>
        </div>
        <div className="testimonialHolder">
          <div className="testimonialDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerMain">
          <div className="footerLogo">
            <img src="assets/main/logo.png" />
          </div>
          <div className="footerDesc">
            <p>
              We are a dynamic web and app development startup, specializing in
              bespoke digital solutions.With a focus on innovation and
              excellence, we bring your digital vision to life.
            </p>
          </div>
          <div className="footerSocial">
            <div className="socialUnit">
              <img src="assets/footer/facebook.png" />
            </div>
            <div className="socialUnit">
              <img src="assets/footer/facebook.png" />
            </div>
            <div className="socialUnit">
              <img src="assets/footer/facebook.png" />
            </div>
            <div className="socialUnit">
              <img src="assets/footer/facebook.png" />
            </div>
          </div>
        </div>
        <div className="footerUnit">
          <div className="footerUnitHeader">
            <p>Services</p>
          </div>
          <div className="footerUnitBorder"></div>
          <div className="footerUnitLinks">
            <div className="footerLink">
              <a>Custom Web Development</a>
            </div>
            <div className="footerLink">
              <a>Mobile App Development</a>
            </div>
            <div className="footerLink">
              <a>E-commerce Solutions</a>
            </div>
            <div className="footerLink">
              <a>UI/UX Design Services</a>
            </div>
            <div className="footerLink">
              <a>Technology Consulting</a>
            </div>
          </div>
        </div>
        <div className="footerUnit">
          <div className="footerUnitHeader">
            <p>Quick Links</p>
          </div>
          <div className="footerUnitBorder"></div>
          <div className="footerUnitLinks">
            <div className="footerLink">
              <a>About Us</a>
            </div>
            <div className="footerLink">
              <a>Features</a>
            </div>
            <div className="footerLink">
              <a>Blog</a>
            </div>
            <div className="footerLink">
              <a>Team</a>
            </div>
            <div className="footerLink">
              <a>Contact</a>
            </div>
          </div>
        </div>
        <div className="footerUnit">
          <div className="footerUnitHeader">
            <p>Contacts</p>
          </div>
          <div className="footerUnitBorder"></div>
          <div className="footerUnitLinks">
            <div className="footerLink">
              <a>2750 Quadra Street Victoria, Canada</a>
            </div>
            <div className="footerLink">
              <a>alpas@gmail.com</a>
            </div>
            <div className="footerLink">
              <a> +44 587 154756</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Loader>
  );
};

export default Main;
