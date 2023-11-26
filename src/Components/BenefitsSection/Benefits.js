import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefitsSection">
      <img src="assets/main/design1.png" className="benefitDesign" />
      <div className="benefitsImg">
        <img src="assets/main/pic1.png" />
      </div>
      <div className="benefitsText">
        <div className="benefitsHeader">
          <p>Empower your business to thrive competitively and endure for the long haul</p>
        </div>
        <div className="benefitsDesc">
          <p>
          Elevate your business with our transformative web and app development services. Unleash competitive prowess and ensure sustained success in the digital landscape.
          </p>
        </div>
        <div className="benefitsUnitSection">
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Innovation with Security</p>
            </div>
          </div>
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Technical Expertise</p>
            </div>
          </div>
        </div>
        <div className="benefitsUnitSection">
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Agile Methodologies</p>
            </div>
          </div>
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Client-Centric</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
