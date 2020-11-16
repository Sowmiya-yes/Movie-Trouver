import React from 'react';

const Results = () => {
  const MOVIE_DATA = localStorage.getItem('favorites')
  return (<div className='results-container intend-5rem-left'>
    {
        MOVIE_DATA.map( movie => (
            <div className="collectionItem">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
            </div>
        ))
    }
  </div>)
}

export default Results;