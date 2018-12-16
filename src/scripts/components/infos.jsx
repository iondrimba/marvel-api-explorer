import React from 'react';
import PropTypes from 'prop-types';

class Infos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={`info__${this.props.type}`}>
        <h3 className="sub-title">{this.props.title}</h3>
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
  type: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.array
}

export default Infos;
