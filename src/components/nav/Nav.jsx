import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
import user from '../../assets/680-it-developer-outline.gif'

import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [activeNev, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNev === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNev === '#about' ? 'active': ''}><img src={user} style={{width: 20, height: 20 }} alt=""/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNev === '#experience' ? 'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNev === '#services' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNev === '#contact' ? 'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav