import React from 'react'
import './Navbar.css'
import logo from './logo.ico'
import SearchBar from './SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'

function Navbar() {
  return (
    <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
            <div className="Burger">
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className='Logo_Div_Navbar'>
                <img src={logo} alt="" />
                <p className='Logo_Title_Navbar'>Youtube</p>
            </div>
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
            <p className="Auth_Btn">
                <BiUserCircle size={22}/>
                <b>Sign in</b>
            </p>
        </div>
    </div>
  )
}

export default Navbar