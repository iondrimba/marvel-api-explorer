import React from 'react';
import Styles from '../../scss/detail.scss';

class DetailComic extends React.Component {
  constructor(props) {
    super(props);
  }
  createMarkup(markup) {
    return { __html: markup };
  }
  render() {
    console.log('comic');
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
                    <h2 >{data.title}</h2>
                    {

                    }
                    <p dangerouslySetInnerHTML={this.createMarkup(data.description)}></p>
                  </section>
                </div>
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
