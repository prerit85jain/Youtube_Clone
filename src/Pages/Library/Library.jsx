import React from 'react'
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
  )
}

export default Library