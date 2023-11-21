import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";

const Contact = () => {
  return (
    <Loader>
      <div className="main">
        <div className="topSectionPage">
          <Header page={"contact"} />
          <div className="topContentPage">
            <p className="topHeadingPage">Contact Us</p>
          </div>
        </div>
        <div className="contactSection">
          <div className="contactTextSection">
            <div className="contactTextTop">
              <p>CONTACT US</p>
            </div>
            <div className="contactTextHeader">
              <p>Drop Us Message for Any Query</p>
            </div>
            <div className="contactTextDesc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="contactFormSection">
            <div className="formPic">
              <img src="assets/contact/contact.png" />
            </div>
            <div className="formBox">
              <div className="formRow">
                <div className="formUnit">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="formUnit">
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              <div className="formRow">
                <div className="formUnit">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="formUnit">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="formRow">
                <div className="formTextBox">
                  <textarea placeholder="Your Message"></textarea>
                </div>
              </div>
              <div className="formRow">
                <button className="formButton">Send Message</button>
              </div>
            </div>
            <div className="contactBox">
              <div className="boxContainer">

              </div>
              <div className="boxContainer">

              </div>
              <div className="boxContainer">

              </div>
            </div>
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default Contact;
