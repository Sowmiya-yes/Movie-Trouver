import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Collection-Styles.css';

const Collection = ({heading, movieList, classname}) => {
    return (
        <div className={`${classname} collectionsContainer`}>
            <div className="genericCollectionsInfo">
                <h2>{heading}</h2>
                <a href="results">View all</a>
            </div>
            <div className="collections">
            {
                movieList.map( movie => (
                    <div key={movie.id} className="collectionItem" > 
                        <Link to= {{ pathname:`/movie/${movie.id}`, aboutProps: movie }}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Collection;