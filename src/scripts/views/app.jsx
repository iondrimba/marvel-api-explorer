import React from 'react';
import { Route } from 'react-router';

import HomeContainer from '../container/homeContainer';
import DetailCharacterContainer from '../container/detailCharacterContainer';
import DetailComicContainer from '../container/detailComicContainer';
import Styles from '../../scss/app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('app render', this.props);
        return (
            <div>
                <Route component={HomeContainer} />
            </div>
        );
    }
}

export default App;
