import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'

function Home() {
  return (
    <div className='Container_Pages_App'>
      <LeftSidebar/>
      <div className="Container2_Pages_App">
        Home
      </div>
    </div>
  )
}

export default Home