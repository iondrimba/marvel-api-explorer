import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
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
