import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import Footer from "../Components/Footer/Footer";

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
              Feel free to drop your questions or share your thoughts. We’re excited to connect with fellow enthusiasts and professionals!
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
                  <div className="boxIconHolder">
                    <img src="assets/contact/envelopNormal.png" />
                  </div>
                  <div className="boxHeader">
                    <p>Email Here</p>
                  </div>
                  <div className="boxDesc">
                    <p>elevancetech@gmail.com</p>
                  </div>
              </div>
              <div className="boxContainer">
                  <div className="boxIconHolder">
                    <img src="assets/contact/envelopNormal.png" />
                  </div>
                  <div className="boxHeader">
                    <p>Location Here</p>
                  </div>
                  <div className="boxDesc">
                    <p>xyz street,Kolkata,West Bengal</p>
                    <p>India</p>
                  </div>
              </div>
              <div className="boxContainer">
                  <div className="boxIconHolder">
                    <img src="assets/contact/envelopNormal.png" />
                  </div>
                  <div className="boxHeader">
                    <p>Call Here</p>
                  </div>
                  <div className="boxDesc">
                    <p>+91 877 784 1592</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Loader>
  );
};

export default Contact;
