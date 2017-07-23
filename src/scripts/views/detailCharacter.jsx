import React from 'react';
import Styles from '../../scss/detail.scss';
import Infos from './infos'

class DetailCharacter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="detail">
        {
          this.props.characters.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div key={data.id + index}>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                <h1>Name:</h1>
                <span>{data.name}</span>
                <h1>Series:</h1>
                <Infos data={data.series.items}></Infos>
                <h1>Stories:</h1>
                <Infos data={data.stories.items}></Infos>
              </div>
            }
          })
        }

      </div>
    );
  }
}

DetailCharacter.propTypes = {
  match: React.PropTypes.object,
  characters: React.PropTypes.array
}

export default DetailCharacter;
