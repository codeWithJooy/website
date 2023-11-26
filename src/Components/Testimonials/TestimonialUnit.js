import React from 'react'

const TestimonialUnit=({name="Abhshek Hazra",designation="Co-Founder",description})=>{
    return(
        <div className="testimonialCardContainer">
        <div className="testimonialCard">
          <div className="testimonialQuotes">
            <img src="assets/main/quotes.png" />
          </div>
          <div className="testimonialRotate"></div>
          <p>
           {description}
          </p>
        </div>
        <div className="testimonialUser">
          <div className="userImage">
            <img src="assets/main/author.jpg" />
          </div>
          <div className="userDetails">
            <div className="userName">
              <p>{name}</p>
            </div>
            <div className="userDesig">
               <p>{designation}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TestimonialUnit