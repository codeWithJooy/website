import React from 'react'

const TestimonialUnit=()=>{
    return(
        <div className="testimonialCardContainer">
        <div className="testimonialCard">
          <div className="testimonialQuotes">
            <img src="assets/main/quotes.png" />
          </div>
          <div className="testimonialRotate"></div>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo."
          </p>
        </div>
        <div className="testimonialUser">
          <div className="userImage">
            <img src="assets/main/author.jpg" />
          </div>
          <div className="userDetails">
            <div className="userName">
              <p>Abhishek Hazra</p>
            </div>
            <div className="userDesig">
               <p>Co-Founder,Elevance Tech</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TestimonialUnit