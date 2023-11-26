import React from "react";

const Footer=()=>{
    return(
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
              <a>Roy street,Bhowanipore,Kolkata,West Bengal, Canada</a>
            </div>
            <div className="footerLink">
              <a>elevancetech@gmail.com</a>
            </div>
            <div className="footerLink">
              <a>+91 877 784 1592</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;