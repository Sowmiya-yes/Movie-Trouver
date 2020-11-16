import React from 'react';
import VideoModal from './VideoModal';
import '../styles/PosterCard-Styles.css';
import MOVIE_DATA from '../data/data';

class PosterCard extends React.Component {

    handleFavoritesClick = (event) => {
        const localData = localStorage.getItem('favorites')
        console.log(localData )
        var arr = []
        if(localData) 
            arr = localData.split(',')
        arr.push(this.props.movie.id)
        localStorage.setItem('favorites', arr)
        localStorage.setItem(this.props.movie.id, JSON.stringify(this.props.movie))
    }

    render() {
        return (
            <div className='poster-card intend-5rem-left'>
                <div className='poster-box'>
                    <img className="poster" src={`https://image.tmdb.org/t/p/original//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg`} alt="" />
                </div>
                <div className='movie-full-details'>
                    <h1>{this.props.movie ? this.props.movie.title : MOVIE_DATA[0].title}</h1>
                    <div className='ratings'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                    <p>{this.props.movie ? this.props.movie.overview : MOVIE_DATA[0].overview}</p>
                    <div className='genre'>
                        <span>Drama</span>
                        <span>Comedy</span>
                        <span>Thriller</span>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Release Date</td>
                                <td>2019-10-02</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>2hr 15mins</td>
                            </tr>
                            <tr>
                                <td>Director</td>
                                <td>Dr. Joe Pr Suan</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='buttons'>
                        <button className='btn play-btn' onClick={this.props.handleModalOpen}><i className="fas fa-play"></i>Watch Trailer</button>  
                        <button className='btn fav-btn' onClick={this.handleFavoritesClick}><i className="fas fa-heart"></i>Add to favorite</button>
                    </div>
                    { this.props.isOpen ? <VideoModal/> : null }
                </div>
            </div>
        )
    }
}

export default PosterCard