import React from 'react';
import MOVIE_DATA from '../data/data';
import Navigation from '../component/Navigation';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    }
  }

  handleSearchInputTextChange = (event) => {
    this.setState({ searchText: event.target.value})
  }

  render() {
    return (<div>
      <Navigation />
      <input type='search' className='search intend-5rem-left' 
        onChange={this.handleSearchInputTextChange} placeholder='Search movies...'></input>
      <h2 className='sub-heading intend-5rem-left'>Here are your results...</h2>
      <div className='results-container intend-5rem-left'>
      {
          MOVIE_DATA
            .filter(movie => movie.title !== undefined && movie.title.toLowerCase().includes(this.state.searchText))
            .map( movie => {
              return (<div className="collectionItem" key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
              </div>)
          })
      }
      </div>
    </div>)
  }
}

export default SearchPage;