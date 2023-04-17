import React from 'react'
import "./Home.css"
import vg from "../assets/2.webp";
import { FaGoogle, FaAmazon, FaYoutube, FaInstagram  } from 'react-icons/fa';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>DOCTOR +</h1>
        <p>Get the plus factor in healthcare with DOCTOR+</p>
      </main>
    </div>
    <div className='home2'>
      <img src={vg} alt='graphics'/>
      <div>ACHIEVEMENTS
           <p>1. Doctor+ has been recognized as the best healthcare provider in the region for 3 consecutive years.</p>
           <p>2. We have successfully treated over 10,000 patients with a satisfaction rate of 98%.</p>
           <p>3.Our team of doctors consists of highly qualified professionals with decades of experience in the healthcare industry.</p>
    </div>

    </div>
     <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Doctor+ is a leading healthcare company that is dedicated to providing high-quality medical services to patients. With a team of experienced doctors, nurses, and support staff, we are committed to delivering personalized care and treatment to our patients.

            Our mission is to improve the health and well-being of individuals and communities by providing access to affordable, reliable, and comprehensive healthcare services. We believe in treating each patient with compassion, respect, and dignity, and strive to create a comfortable and welcoming environment for everyone who walks through our doors.

            At Doctor+, we are constantly innovating and adapting to meet the evolving needs of our patients. Whether you are seeking preventive care, diagnostic services, or specialized treatments, we are here to help you achieve your health goals and live your best life.</p>
        </div>
     </div>
     <div className="home4" id="brands">
        <div className="home4_container">
            <h1>Brands</h1>
            <article>
                <div>
                    <FaGoogle/>
                    <p>Google</p>
                </div>
                <div>
                    <FaAmazon/>
                    <p>Amazon</p>
                </div>
                <div>
                    <FaYoutube/>
                    <p>YouTube</p>
                </div>
                <div>
                    <FaInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
     </div>
    </>
  )
}

export default Home
