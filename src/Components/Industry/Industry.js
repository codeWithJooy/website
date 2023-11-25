import React from 'react'
import "./Industry.css"

const Industry=()=>{
  return(
    <div className='industrySection'>
       <div className='industryHeader'>
         <p>Industries We Serve</p>
       </div>
       <div className='industryDesc'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </div>
       <div className='industryPoints'>
         <div className='industryUnits'>
            <p>Machine Learning</p>
         </div>
         <div className='industryUnits'>
            <p>Machine Learning</p>
         </div>
         <div className='industryUnits'>
            <p>Machine Learning</p>
         </div>
         <div className='industryUnits'>
            <p>Machine Learning</p>
         </div>
       </div>
    </div>
  )
}

export default Industry;