import React from 'react'
import './LeftSidebar.css'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md'
import shorts from './Shorts.png'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function DrawerSidebar({toggleDrawer, toggleDrawerSidebar}) {
  return (
    <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
        <div className="container2_DrawerLeftSidebar">
            <div className="drawer_leftsidebar">
              <NavLink to={'/'} className="icon_Sidebar_Div">
                <p>
                  <AiOutlineHome size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Home</div>
                </p>
              </NavLink>
              <div className="icon_Sidebar_Div">
                <p>
                  <MdOutlineExplore size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Explorer</div>
                </p>
              </div>
              <div className="icon_Sidebar_Div">
                <p>
                  <img src={shorts} width={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Shorts</div>
                </p>
              </div>
              <div className="icon_Sidebar_Div">
                <p>
                  <MdOutlineSubscriptions size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Subscription</div>
                </p>
              </div>
            </div>
            <div className="Library_Btn_DrawerLeftsidebar">
              <NavLink to={'/library'} className="icon_Sidebar_Div">
                <p>
                  <MdOutlineVideoLibrary size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Library</div>
                </p>
              </NavLink>
              <NavLink to={'/history'} className="icon_Sidebar_Div">
                <p>
                  <FaHistory size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">History</div>
                </p>
              </NavLink>
              <NavLink to={'/yourvideo'} className="icon_Sidebar_Div">
                <p>
                  <AiFillPlaySquare size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Your Videos</div>
                </p>
              </NavLink>
              <NavLink to={'/watchlater'} className="icon_Sidebar_Div">
                <p>
                  <MdOutlineWatchLater size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Watch Later</div>
                </p>
              </NavLink>
              <NavLink to={'/likedvideos'} className="icon_Sidebar_Div">
                <p>
                  <AiFillLike size={22} className={'icon_sidebar'} style={{margin: "auto 0.7rem"}}/>
                  <div className="text_sidebar_icon">Liked Videos</div>
                </p>
              </NavLink>
            </div>
            <div className="Subscriptions_lsdbar">
              <h3>Your Subscriptions</h3>
              <div className="chanel_lsdbar">
                <p>C</p>
                <div>Chanel</div>
              </div>
              <div className="chanel_lsdbar">
                <p>C</p>
                <div>Chanel</div>
              </div>
              <div className="chanel_lsdbar">
                <p>C</p>
                <div>Chanel</div>
              </div>
              <div className="chanel_lsdbar">
                <p>C</p>
                <div>Chanel</div>
              </div>
            </div>
        </div>
        <div className="container3_DrawerLeftSidebar" onClick={()=>toggleDrawer()}>

        </div>
    </div>
  )
}

export default DrawerSidebar