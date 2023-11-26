import React from "react";

const Footer=()=>{
  const handleClick=(link)=>{
    window.open(link)
  }
    return(
        <div className="footer">
        <div className="footerMain">
          <div className="footerLogo">
            <img src="assets/main/logo_real.png" />
          </div>
          <div className="footerDesc">
            <p>
              We are a dynamic web and app development startup, specializing in
              bespoke digital solutions.With a focus on innovation and
              excellence, we bring your digital vision to life.
            </p>
          </div>
          <div className="footerSocial">
            <div className="socialUnit" onClick={()=>handleClick("https://www.facebook.com/profile.php?id=61553838007361&sk=about")}>
              <img src="assets/footer/facebook.png" />
            </div>
            <div className="socialUnit" onClick={()=>handleClick("https://www.linkedin.com/company/101025795/admin/feed/posts/")}>
              <img src="assets/footer/linkedin.png" />
            </div>
            <div className="socialUnit" onClick={()=>handleClick("https://elevancetech.quora.com/?ch=3&oid=4686301&share=396067ef&srid=3dHUuO&target_type=tribe")}>
              <img src="assets/footer/quora.png" />
            </div>
            <div className="socialUnit" onClick={()=>handleClick("https://twitter.com/ElevanceT4395")}>
              <img src="assets/footer/twitter.png" />
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
              <a>Roy street, Bhowanipore, Kolkata, West Bengal, India</a>
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