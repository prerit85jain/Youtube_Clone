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
              <div className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p>C</p>
                </b>
                <p className="chanel_name_videoPage">Chanel Name</p>
              </div>
              <div className="comments_videoPage">
                <h2>
                  <u>Comments</u>
                </h2>

              </div>
          </div>
        </div>
        <div className="moreVideoBar">
          More Video
        </div>
      </div>
    </div>
    </>
  )
}

export default VideoPage