import React from 'react';
import MOVIE_DATA from '../data/data';

import Navigation from '../component/Navigation';
import PosterCard from '../component/PosterCard';
import Collection from '../component/Collection';
import Results from '../component/Results';

import './Page-Styles.css';


class Moviepage extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearch: false,
      isOpen: false,
      searchText: '',
      filteredMovies: []
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  handleSearchInputTextChange = (event) => {
    this.setState({ searchText: event.target.value, filteredMovies:  MOVIE_DATA})
  }

  handleClickOutside = (event) => {
    console.log(event.target.value)
    if(event.target.className.split(" ").includes('fa-search') || event.target.className.split(" ").includes('search')) 
      this.setState({ showSearch: true})
    else if(event.target.className.split(" ").includes('video-modal'))
      this.setState({isOpen: false})
    else
      this.setState({ showSearch: false })
  }

  handleModalOpen = (event) => {
    this.setState({isOpen: true})
  }

  render() {
    return (
      
      <div className='app'>
        <Navigation searchCLickHandle={this.handleClickOutside}/>
        {
          this.state.showSearch ? 
          <input type='search' className='search intend-5rem-left' 
          onChange={this.handleSearchInputTextChange} placeholder='Search movies...'></input> : 
          null
        }
        { 
          this.state.searchText.length > 0 ?
          <Results /> :
          <>
            <PosterCard isOpen={this.state.isOpen} 
              handleModalOpen={this.handleModalOpen} 
              movie={this.props.location.aboutProps}
              id={this.props.match.params.id}
              />
            <Collection heading="Similar movies" classname='bottom-5rem intend-5rem-left' movieList={MOVIE_DATA} /> 
          </>
        }
      </div>
    )
  }
}

export default Moviepage;
