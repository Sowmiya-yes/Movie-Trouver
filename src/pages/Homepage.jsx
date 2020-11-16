import React from 'react';

import Herocard from '../component/Herocard';
import MovieCollections from '../component/MovieCollections';
import Navigation from '../component/Navigation';

import './Page-Styles.css';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    console.log(event.target.className.split(" ").includes('video-modal'))
    if(event.target.className.split(" ").includes('fa-search') || event.target.className.split(" ").includes('search')) 
      this.setState({ showSearch: true})
    else if(event.target.className.split(" ").includes('video-modal'))
      this.setState({isOpen: false})
    else 
      this.setState({ showSearch: false})
  }

  handleModalOpen = () => {
    this.setState({isOpen: true})
  }

  render() {
    return (
        <div className="app">
          <Navigation searchCLickHandle={this.handleClickOutside} />
          {
            <>
              <Herocard isOpen={this.state.isOpen} handleModalOpen={this.handleModalOpen}/>
              <MovieCollections />
            </>
          }
        </div>
    )
  }
}

export default Homepage;
