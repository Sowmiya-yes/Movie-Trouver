import React from 'react';
import MOVIE_DATA from '../data/data';
import '../styles/MovieCollections-Styles.css';
import Collection from './Collection';

function MovieCollections() {
    return (
      <div className='movie-col intend-5rem-left'>
        <Collection heading="Latest Movies" movieList={MOVIE_DATA}/>
        <Collection heading="Popular movies" movieList={MOVIE_DATA} />
        <Collection heading="Top Rated" movieList={MOVIE_DATA} />
        <Collection heading="Upcoming movies" movieList={MOVIE_DATA} />
      </div>
    )
}

export default MovieCollections;
