import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="topSection">
        <div className="header">
          <div className="headerContainer">
            <div className="headerLogo">
              <img src="assets/main/logo.png" />
              <img src="assets/main/hamburger.png" className="hamburger" />
            </div>
            <div className="headerLinks">
              <div className="linkUnit">
                <p>Home</p>
              </div>
              <div className="linkUnit">
                <p>About Us</p>
              </div>
              <div className="linkUnit">
                <p>Our Products</p>
              </div>
              <div className="linkUnit">
                <p>Blogs</p>
              </div>
              <div className="linkUnit">
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Main;
