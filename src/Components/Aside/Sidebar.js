import React, { useState } from 'react'
import './sidebar.css'
import { IoHome } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { AiFillProject } from 'react-icons/ai'
import { TiMessages } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'

const Sidebar = () => {

  const [toggle, setToggle] = useState(false)

  const triggerToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className={toggle ? 'sidebar-mobile' : 'sidebar'}>
      <div className='logo'>
        <a href='#'><span>P</span>ortfolio</a>
      </div>
      <div className="nav-toggler" onClick={triggerToggle}>
        {toggle ? <div className='cross'><BsXLg /></div> : <span></span>}
      </div>
      <div className='nav' onClick={triggerToggle}>
        <ul>
          <NavLink to="/"><li><IoHome /> Home</li></NavLink>
          <NavLink to="/about"><li><FaUserAlt /> About</li></NavLink>
          <NavLink to="/skills"><li><GiSkills /> Skills</li></NavLink>
          <NavLink to="/projects"><li><AiFillProject /> Projects</li></NavLink>
          <NavLink to="/contact"><li><TiMessages /> Contacts</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar