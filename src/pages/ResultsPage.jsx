import React from 'react';
// import MOVIE_DATA from '../data/data';
import Navigation from '../component/Navigation';

const ResultsPage = () => {
  let MOVIE_DATA = localStorage.getItem('favorites')
  if(MOVIE_DATA)
    MOVIE_DATA = MOVIE_DATA.split(',')
  else
    MOVIE_DATA = []
    console.log(MOVIE_DATA)
  return (<div>
    <Navigation />
    <h2 className='sub-heading intend-5rem-left'>Here are your results...</h2>
    <div className='results-container intend-5rem-left'>
    {
        MOVIE_DATA.map( movieId => {
            const movie = JSON.parse(localStorage.getItem(movieId))
            return (<div className="collectionItem" key={movieId}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
            </div>)
        })
    }
    </div>
  </div>)
}

export default ResultsPage;