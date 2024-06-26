import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import './LeftSidebar.css'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
=======
import shorts from './Shorts.png'
>>>>>>> drawer

function LeftSidebar() {
  return (
    <div className='Container_LeftSidebar'>
        <NavLink to={'/'} className="icon_Sidebar_Div">
            <AiOutlineHome size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <div className="icon_Sidebar_Div">
            <MdOutlineExplore size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Explore</div>
        </div>
        <div className="icon_Sidebar_Div">
<<<<<<< HEAD
=======
            <img src={shorts} width={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Shorts</div>
        </div>
        <div className="icon_Sidebar_Div">
>>>>>>> drawer
            <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon" style={{fontSize:"11px"}}>Subscriptions</div>
        </div>
        <NavLink to={'/library'} className="icon_Sidebar_Div">
            <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Library</div>
        </NavLink>
    </div>
  )
}

export default LeftSidebar