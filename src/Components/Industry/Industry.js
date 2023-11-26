import React from 'react'
import "./Industry.css"

const Industry=()=>{
  return(
    <div className='industrySection'>
       <div className='industryHeader'>
         <p>Industries We Serve</p>
       </div>
       <div className='industryDesc'>
         <p>Mobile applications and websites are utilized across various industries. Some of the sectors we predominantly serve include</p>
       </div>
       <div className='industryPoints'>
         <div className='industryUnits'>
            <p>Retail and E-commerce</p>
         </div>
         <div className='industryUnits'>
            <p>Education</p>
         </div>
         <div className='industryUnits'>
            <p>Travel and Hospitality</p>
         </div>
         <div className='industryUnits'>
            <p>Food and Beverage</p>
         </div>
       </div>
    </div>
  )
}

export default Industry;