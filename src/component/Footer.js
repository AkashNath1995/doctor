import React from 'react'
import "./Footer.css";
import { FaYoutube, FaInstagram,FaFacebookF,FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer >
        <div className="footer_container-1">
            <h1>DOCTOR +</h1>
            <p>@all right reserved</p>
        </div>
        <div className="footer_container-2">
            <h4>Follow Us On</h4>
            <div>
            <a href="https://www.youtube.com/" target="blank"><FaYoutube/></a>
            <a href="https://www.youtube.com/" target="blank"><FaInstagram/></a>
            <a href="https://www.youtube.com/" target="blank"><FaFacebookF/></a>
            <a href="https://www.youtube.com/" target="blank"><FaGithub/></a>
            </div>
        </div>
    </footer>

  )
}

export default Footer
