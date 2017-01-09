import React from 'react';
import Api from '../model/api';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.api = new Api();
    }
    componentDidMount() {
        this.api.getCharacters();
    }
    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

Home.propTypes = {
    muteAction: React.PropTypes.func
    , muted: React.PropTypes.bool
};

export default Home;
