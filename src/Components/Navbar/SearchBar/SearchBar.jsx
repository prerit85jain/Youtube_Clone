import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'

function SearchBar() {
  return (
    <>
    <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="Search_Div">
                <input type="text" className='iBox_SearchBar' placeholder='Search' />
                <FaSearch className='SearchIcon_SearchBar'/>
                <BsMicFill className='Mic_SearchBar'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchBar