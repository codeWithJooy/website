import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Header = ({page}) => {
  const [isSticky, setSticky] = useState(false);
  const [dropDown,setDropDown]=useState(false);

  const history=useHistory()
  
  const dropToggle=()=>{
    setDropDown(!dropDown)
  }

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
        <div className="headerLogo" onClick={dropToggle}>
          <img src="assets/main/logo_real.png"  className="logo"/>
          <img src="assets/main/hamburger.png" className="hamburger" />
        </div>
        <div className="headerLinks">
          <div className={`${page=="home" ?"linkUnitActive":"linkUnit"}`} onClick={()=>history.push("/")}>
            <p>Home</p>
          </div>
          <div className={`${page=="about" ?"linkUnitActive":"linkUnit"}`} onClick={()=>history.push("/about")}>
            <p>About Us</p>
          </div>
          <div className={`${page=="products" ?"linkUnitActive":"linkUnit"}`}>
            <p>Our Products</p>
          </div>
          <div className={`${page=="blogs" ?"linkUnitActive":"linkUnit"}`}>
            <p>Blogs</p>
          </div>
          <div className={`${page=="contact" ?"linkUnitActive":"linkUnit"}`} onClick={()=>history.push("/contact")}>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      
        <div className={`headerDropDown ${dropDown ? 'active' : ''}`}>
        <div className={`dropDownUnit ${page=="home" ?"pageSelected":""}`} onClick={()=>history.push("/")}>
            <p>Home</p>
        </div>
        <div className={`dropDownUnit ${page=="about" ?"pageSelected":""}`} onClick={()=>history.push("/about")} >
            <p>About</p>
        </div>
        <div className={`dropDownUnit ${page=="products" ?"pageSelected":""}`}>
            <p>Our Products</p>
        </div>
        <div className={`dropDownUnit ${page=="blogs" ?"pageSelected":""}`}>
            <p>Blogs</p>
        </div>
        <div className={`dropDownUnit ${page=="contact" ?"pageSelected":""}`} onClick={()=>history.push("/contact")}>
            <p>Contact Us</p>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
