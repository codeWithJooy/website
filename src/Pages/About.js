import Header from "../Components/Header/Header"
import React,{useState,useEffect} from 'react'

const About=()=>{
    return(
        <div className="main">
            <div className="topSectionPage">
                <Header />
                <div className="topContentPage">
                  <p className="topHeadingPage">About Us</p>
                </div>
            </div>
        </div>
    )
}

export default About