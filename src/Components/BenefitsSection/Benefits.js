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
          <p>Make your business more competitive and sustainable.</p>
        </div>
        <div className="benefitsDesc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="benefitsUnitSection">
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Influencing Sales</p>
            </div>
          </div>
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Influencing Sales</p>
            </div>
          </div>
        </div>
        <div className="benefitsUnitSection">
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Influencing Sales</p>
            </div>
          </div>
          <div className="benefitsUnit">
            <div className="benefitsTick">
              <img src="assets/main/read.png" />
            </div>
            <div className="benefits">
              <p>Influencing Sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
