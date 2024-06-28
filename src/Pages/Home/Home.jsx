import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSideBar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid2.mp4'

function Home() {
  const vids = [
    {
      _id1: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploader: "a",
      description: "description of video 1"
    },
    {
      _id1: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploader: "b",
      description: "description of video 2"
    },
    {
      _id1: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploader: "c",
      description: "description of video 3"
    },
    {
      _id1: 4,
      video_src: vid,
      Chanel: "your",
      title: "video 4",
      Uploader: "d",
      description: "description of video 4"
    },
  ];
  return (
    <div className='Container_Pages_App'>
      <LeftSidebar/>
      <div className="Container2_Pages_App">
        <ShowVideoGrid vids={vids}/>
      </div>
    </div>
  )
}

export default Home