import React from 'react'
import './footer.css'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
      <footer>
        <a href="" className='footer__logo'> Name </a>
        <ul className='permalinks'> 
            <li><a href="#"> Home</a></li>
            <li><a href="#"> About</a></li>
            <li><a href="#"> Contact</a></li>
            <li><a href="#"> Experience</a></li>
            <li><a href="#"> Portfolio</a></li>
            <li><a href="#"> Testimonials</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://twitter.com"> <ImTwitter/> </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; All rights Reserved </small>
        </div>
      </footer>
  )
}

export default Footer