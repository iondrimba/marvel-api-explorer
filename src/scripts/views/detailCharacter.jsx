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
                <div className="detail__cover">
                  <div className="detail__cover--reflex">
                    <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                  </div>
                </div>
                <div className="detail__infos">
                  <section className="info__name">
                    <h2>Name:</h2>
                    <span>{data.name}</span>
                  </section>
                  <Infos title="Series" type="series" data={data.series.items || []}></Infos>
                  <Infos title="Stories" type="stories" data={data.stories.items || []}></Infos>
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
