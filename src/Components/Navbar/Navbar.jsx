import React from 'react'
import './Navbar.css'
import logo from './logo.ico'
import SearchBar from './SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Navbar({toggleDrawer}) {
    // const CurrentUser=null;
    const CurrentUser = {
        result: {
            email: "preritjain@hmail.com",
            joinedon: "2004-04-05T07:19:30.522Z",
        },
    };

  return (
    <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
            <div className="Burger" onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Link to={'/'} className='Logo_Div_Navbar'>
                <img src={logo} alt="" />
                <p className='Logo_Title_Navbar'>Youtube</p>
            </Link>
        </div>
        <SearchBar/>
        <RiVideoAddLine size={22} className={"Vid_Bell_Navbar"}/>
        <div className="Apps_Box">
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
            <p className="AppBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="Vid_Bell_Navbar"/>
        <div className="Auth_Cont_Navbar">
            {
                CurrentUser ? (
                <>
                <div className="chanel_Logo_App">
                    <p className="fstChar_Logo_App">
                        {
                            CurrentUser?.result.name?(
                                <>
                                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                                </>
                            ):(
                            <>
                            {CurrentUser?.result.email.charAt(0).toUpperCase()}
                            </>
                            )}
                    </p>
                </div>
                </>
            ):(
                <>
                <p className="Auth_Btn">
                    <BiUserCircle size={22}/>
                    <b>Sign in</b>
                </p>
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar