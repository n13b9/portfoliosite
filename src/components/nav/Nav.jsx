import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {FcContacts} from 'react-icons/fc'
import {GiThreeFriends} from 'react-icons/gi'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#');
  return (
    <nav>
      <a href="#" className={activeNav==='#' ? 'active' : ''}> <AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} 
             className={activeNav==='#about' ? 'active':''}> 
             <FaUserAstronaut/> 
      </a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} 
             className={activeNav==='#experience' ? 'active':''}> <BsFillBookmarkStarFill/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} 
             className={activeNav==='#contact' ? 'active':''}> <FcContacts/></a>
      <a href="#testimonial" onClick={()=>setActiveNav('#testimonial')} 
             className={activeNav==='#testimonial' ? 'active':''}><GiThreeFriends/> </a>
    </nav>
  )
}

export default Nav