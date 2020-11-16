import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Moviepage from './pages/Moviepage';
import ResultsPage from './pages/ResultsPage';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/movie/:id' component={Moviepage} />
          <Route path='/results' component={ResultsPage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
       </BrowserRouter>
    )
  }
}

export default App;
