import React from 'react'
import "../Styles/CaseStudy.css";
import CaseSlider from "../Components/CaseSlider";


const CaseStudies = () => {
  return (
    <div className='flex-wrap'>
        <hr class="dashed-2 mt-20" />
        <h1 className='main-head-case'>LEARN HOW WE HELP INDUSTRIES AND MANUFACTURERS</h1>
        <h1 className='main-head-mid-case'>Case Studies & Resource</h1>
        <p className='main-sub-head'>We go through the Problem Faced by Current Manufacturers, Industries, etc that we are going to solve.</p>
        <CaseSlider />
        <hr class="dashed-2 mt-20" />
    </div>
  )
}

export default CaseStudies