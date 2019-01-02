import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from '../container/homeContainer';
import '../../scss/app.scss';

const DetailCharacterLazy = lazy(() => import('../container/detailCharacterContainer'));
const DetailComicLazy = lazy(() => import('../container/detailComicContainer'));
const AboutLazy = lazy(() => import('./about'));

class App extends React.Component {

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Route path='/:type?/:page?' component={HomeContainer} />
          <Route path="/characters/detail/:id" component={DetailCharacterLazy} />
          <Route path="/comics/detail/:id" component={DetailComicLazy} />
          <Route path="/about" component={AboutLazy} />
        </Suspense>
      </div>
    );
  }
}

export default App;
