import React, { PureComponent } from 'react';
import CloseIcon from '../components/close-icon';
import PropTypes from 'prop-types';

class About extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.about.classList.add('animate');
      })
    }, 50);
  }

  render() {
    return (
      <section ref={(c) => this.about = c} className="about" >
        <a role="button" className="close" onClick={this.props.history.goBack} title="close">
          <CloseIcon color="#000" />
        </a>
        <div className="content">
          <h1>About</h1>
          <p>
            MARVEL API Explorer is a personal project made by <a title="Ion Drimba Filho Potfolio" className="link" target="_blank" rel="noopener noreferrer" href="https://iondrimbafilho.me/">Ion Drimba Filho</a> using ReactJS + Redux and the oficial <a title="Marvel API" className="link" target="_blank" rel="noopener noreferrer" href="http://developer.marvel.com/">Marvel API</a>.<br />
            It also works as a PWA.
        </p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/iondrimba/marvel-api-explorer" className="github" title="Github">
            <img src="/images/github.svg" alt="Github icon" width="32" height="32" />
          </a>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  'history': PropTypes.object
};

export default About;
