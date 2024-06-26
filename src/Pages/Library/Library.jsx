import React from 'react'
<<<<<<< HEAD

function Library() {
  return (
    <div>Library</div>
=======
import './Library.css'
import LeftSidebar from '../../Components/LeftSideBar/LeftSidebar'

function Library() {
  return (
    <div className='Container_Pages_App'>
      <LeftSidebar/>
      <div className="Container2_Pages_App">
        Library
      </div>
    </div>
>>>>>>> drawer
  )
}

export default Library