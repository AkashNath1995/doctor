import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import img3 from "../assets/6.webp"
import img4 from "../assets/7.jpg"

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false}  showThumbs={false} interval={1000}>
        <div>
            <img src={img1} alt="1st img"/>
            <p>Primary care consultations</p>
        </div>
        <div>
            <img src={img2} alt="2nd img"/>
            <p>Specialist consultations</p>
        </div>
        <div>
            <img src={img3} alt="3rd img"/>
            <p>Diagnostic services (e.g., blood tests, X-rays, MRIs, etc.)</p>
        </div>
        <div>
            <img src={img4} alt="4th img"/>
            <p>Children's health services</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
