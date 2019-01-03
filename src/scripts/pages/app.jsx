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
          <Route path="/characters/detail/:id" render={(props) => <DetailCharacterLazy {...props} />} />
          <Route path="/comics/detail/:id" render={(props) => <DetailComicLazy {...props} />} />
          <Route path="/about" render={(props) => <AboutLazy {...props} />} />
        </Suspense>
      </div>
    );
  }
}

export default App;
