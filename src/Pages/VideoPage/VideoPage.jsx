import React from 'react'
import vid from '../../Components/Video/vid2.mp4'
import './VideoPage.css'

function VideoPage() {
  return (
    <>
    <div className="container_videoPage">
      <div className="container2_videoPage">
        <div className="video_display_screen_videoPage">
          <video src={vid} className={"video_ShowVideo_VideoPage"}
          controls
          autoPlay
          ></video>
          <div className="video_details_videoPage">
            <div className="video_btns_title_videoPage_cont">
              <p className="video_title_VideoPage">Title</p>
              <div className="views_date_btn_VideoPage">
                <div className="views_videoPage">
                  5 views <div className="dot"></div> Uploaded 1 year ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default VideoPage