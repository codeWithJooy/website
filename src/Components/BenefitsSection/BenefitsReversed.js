import React from "react";
import "./Benefits.css";

const BenefitsReversed = () => {
  return (
    <div className="benefitsSectionReversed">
      <img src="assets/main/design1.png" className="benefitDesignReversed" />
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
      <div className="benefitsImg">
        <img src="assets/main/pic2.png" />
      </div>
    </div>
  );
};

export default BenefitsReversed;