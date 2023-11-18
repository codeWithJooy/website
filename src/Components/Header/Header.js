import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const history=useHistory()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isStickyHeader = scrollPosition > 100;
      setSticky(isStickyHeader);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${isSticky ? "headerSticky" : "header"}`}>
      <div className="headerContainer">
        <div className="headerLogo">
          <img src="assets/main/logo.png" />
          <img src="assets/main/hamburger.png" className="hamburger" />
        </div>
        <div className="headerLinks">
          <div className="linkUnit" onClick={()=>history.push("/")}>
            <p>Home</p>
          </div>
          <div className="linkUnit" onClick={()=>history.push("/about")}>
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
  );
};

export default Header;
