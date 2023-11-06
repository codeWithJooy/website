import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="topSection">
        <div className="header">
          <div className="headerContainer">
            <div className="headerLogo">
              <img src="assets/main/logo.png" />
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
          <div className="topContentText"></div>
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
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
               </div>
            </div>
            <div className="featureUnit">
               <img src="assets/features/feature1.png" />
               <div className="featureUnitHeader">
                <p>Departments</p>
               </div>
               <div className="featureUnitDesc">
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
               </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Main;
