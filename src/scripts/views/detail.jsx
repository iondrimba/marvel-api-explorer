import React from 'react';
import Styles from '../../scss/detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="detail">
        {
          this.props.characters.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <img key={data.id + index} src={`${data.thumbnail.path}/detail.${data.thumbnail.extension}`} />
            }
          })
        }

      </div>
    );
  }
}

Detail.propTypes = {
  match: React.PropTypes.object,
  characters: React.PropTypes.array
}

export default Detail;
