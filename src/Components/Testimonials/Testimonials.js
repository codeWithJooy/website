import React from 'react'
import TestimonialUnit from './TestimonialUnit';
const Testimonials=()=>{
    return(
        <div className="testimonialSection">
        <div className="testimonialHolder">
          <div className="testimonialHeader">
            <p>Trusted by over 250,000 business owners</p>
          </div>
        </div>
        <div className="testimonialHolder">
          <div className="testimonialDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="testimonials">
           <TestimonialUnit />
           <TestimonialUnit />
           <TestimonialUnit />
        </div>
      </div>
    )
}

export default Testimonials;