import React from 'react';
import Styles from '../../scss/detail.scss';

class Infos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={`info__${this.props.type}`}>
        <h2>{this.props.title}</h2>
        <ul>
          {
            this.props.data.map((item, index) => {
              return <li key={Math.random(0, 10)}>{item.name}</li>
            })
          }
        </ul>
      </section>
    );
  }
}

Infos.propTypes = {
  type: React.PropTypes.string,
  title: React.PropTypes.string,
  data: React.PropTypes.array
}

export default Infos;
