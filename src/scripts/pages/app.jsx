import React from 'react';
import { Route } from 'react-router';

import HomeContainer from '../container/homeContainer';
import DetailCharacterContainer from '../container/detailCharacterContainer';
import DetailComicContainer from '../container/detailComicContainer';
import About from './about';
import '../../scss/app.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <Route path='/:type?/:page?' component={HomeContainer} />
        <Route path="/characters/detail/:id" component={DetailCharacterContainer} />
        <Route path="/comics/detail/:id" component={DetailComicContainer} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
