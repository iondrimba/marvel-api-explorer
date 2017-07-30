import React from 'react';
import Styles from '../../scss/detail.scss';

class DetailComic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="detail">
        {
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div key={data.id + index}>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                <h1 >{data.title}</h1>
                <p >{data.description}</p>
              </div>
            }
          })
        }

      </div>
    );
  }
}

DetailComic.propTypes = {
  match: React.PropTypes.object,
  data: React.PropTypes.array
}

export default DetailComic;
