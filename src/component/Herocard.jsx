import React from 'react';
import VideoModal from './VideoModal';
import '../styles/Herocard-Styles.css';

const Hercoard = ({isOpen, handleModalOpen}) => {
    return (
      <div className="hero-container intend-5rem-left">
        <div className='backdrop'>
          <div className='movie-details'>
            <h1>Movie Name</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button onClick={handleModalOpen}>Watch Trailer</button>
            {
              isOpen ? <VideoModal/> : null
            }
          </div>
        </div>
        <div className='hero-card'>
          <img src='https://image.tmdb.org/t/p/original/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg' alt="movie poster" className="hero-image" />
        </div>
      </div>
    )
}

export default Hercoard;