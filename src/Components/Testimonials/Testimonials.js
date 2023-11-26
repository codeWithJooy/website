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
           <TestimonialUnit name={"Chainrup Bothra"} designation={"Founder,Sankalp Academy"} description={"Working with Elevance was a game-changer for our home based tutor service. Their team's expertise in crafting both web and mobile applications is unparalleled. They not only delivered top-notch solutions but also offered invaluable insights throughout the process. Our users love the seamless experience they've provided. Highly recommended!"}/>
           <TestimonialUnit  name={"Harshit Jain"} designation={"Founder,Jain Enterprises"} description={"Choosing Elevance for our tenant management website and mobile app needs was one of the best decisions we made. Their dedication to understanding our vision and translating it into a user-friendly interface exceeded our expectations. Their post-launch support is remarkable, ensuring a smooth and hassle-free experience. Thank you for an amazing collaboration!"}/>
           <TestimonialUnit name={"Sankha Ghosh"} designation={"CEO,Eommerce App"} description={"We engaged Elevance to develop our eCommerce app, and we were blown away by the results. Their team's attention to detail and understanding of our target market was exceptional. The app they created is not only visually appealing but also incredibly intuitive, resulting in a significant boost in our online sales. Highly impressed and satisfied!"}/>
        </div>
      </div>
    )
}

export default Testimonials;