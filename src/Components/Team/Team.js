import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <div className="teamSection">
      <div className="teamHeader">
        <p>Meet Our Team</p>
      </div>
      <div className="teamDesc">
        <p>
        Get acquainted with the passionate experts behind our groundbreaking solutions.
        </p>
      </div>
      <div className="teams">
        <div className="teamUnit">
          <div className="teamPic">
            <img src="assets/about/team2.jpg" />
          </div>
          <div className="teamDetails">
            <div className="teamName">
              <p>Hemant Jain</p>
            </div>
            <div className="teamDesig">
              <p>Co-Founder and CEO</p>
            </div>
          </div>
        </div>
        <div className="teamUnit">
          <div className="teamPic">
            <img src="assets/about/pic.jpg" />
          </div>
          <div className="teamDetails">
            <div className="teamName">
              <p>Sanky G</p>
            </div>
            <div className="teamDesig">
              <p>Co-Founder,BDM</p>
            </div>
          </div>
        </div>
        <div className="teamUnit">
          <div className="teamPic">
            <img src="assets/about/team3.jpg" />
          </div>
          <div className="teamDetails">
            <div className="teamName">
              <p>Abhishek Hazra</p>
            </div>
            <div className="teamDesig">
              <p>Co-Founder,Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
