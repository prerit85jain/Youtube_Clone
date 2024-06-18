import React from 'react'
import './Navbar.css'
import logo from './logo.ico'
import SearchBar from './SearchBar/SearchBar'

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
    </div>
  )
}

export default Navbar