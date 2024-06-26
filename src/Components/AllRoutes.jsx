import React from 'react'
import Home from '../Pages/Home/Home'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideos from '../Pages/YourVideos/YourVideos';
import WatchHistory from '../Pages/WatchHistory/WatchHistory'
import WatchLater from '../Pages/WatchLater/WatchLater'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import VideoPage from '../Pages/VideoPage/VideoPage';



function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/yourvideo' element={<YourVideos/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideos' element={<LikedVideo/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
    </Routes>
  )
}

export default AllRoutes