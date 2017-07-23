import React from 'react';
import Styles from '../../scss/detail.scss';

class Infos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="infos">
        <ul>
          {
            this.props.data.map((item, index) => {
              return <li key={Math.random(0, 10)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

Infos.propTypes = {
  match: React.PropTypes.object,
  data: React.PropTypes.array
}

export default Infos;
