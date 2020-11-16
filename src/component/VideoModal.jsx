import React from 'react';
import '../styles/VideoModal-Styles.css';

const VideoModal = () => {
    return (
      <div className='video-modal'>
        <iframe title='trailer' className='yt-video' width="50%" height="65%" src="https://www.youtube.com/embed/t433PEQGErc"></iframe>
      </div> 
    )
}

export default VideoModal;