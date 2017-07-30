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
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div key={data.id + index}>
                <div className="cover">
                  <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                </div>
                <div className="infos">
                  <h1>Name:</h1>
                  <span>{data.name}</span>
                  <h1>Series:</h1>
                  <Infos data={data.series.items || []}></Infos>
                  <h1>Stories:</h1>
                  <Infos data={data.stories.items || []}></Infos>
                </div>
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
  data: React.PropTypes.array
}

export default DetailCharacter;
