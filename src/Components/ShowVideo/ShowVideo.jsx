import React from 'react'
import './ShowVideo.css'

function ShowVideo({vid}) {
  return (
    <>
    <div>
        <video
        src={`${vid?.video_src}`}
          className="video_ShowVideo"
        />
    </div>
    <div className="video_description">
      <div className="chanel_Logo_App">
        <div className="fstChar_Logo_App">
          <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
        </div>
      </div>
      <div className="video_details">
        <p className='title_vid_ShowVideo'>title</p>
        <pre className='vid_views_UploadTime'>5-4-2004</pre>
        <pre className='vid_views_UploadTime'>
          5 views <div className="dot"></div> video uploaded 1 year ago
        </pre>
      </div>
    </div>
    </>
  )
}

export default ShowVideo