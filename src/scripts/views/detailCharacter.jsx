import React from 'react';
import Styles from '../../scss/detail.scss';
import Infos from './infos'

class DetailCharacter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    this.refs.cover.querySelector('img').onload = () => {
      const coverHeight = this.refs.cover.getBoundingClientRect().height;
      this.refs.infos.style.transform = `translateY(${coverHeight}px)`;
    };
    this.animateIn([...document.querySelectorAll('.slides div')]);

  }
  animateIn(slides) {
    slides.map((el, index) => {
      setTimeout(() => {
        el.classList.remove('active');
        el.classList.add('active');
      });
    });

    setTimeout(() => {
      slides.reverse().map((el, index) => {
        setTimeout(() => {
          el.classList.remove('active');
          el.classList.add('out');
        });
      });
    }, 600);

    setTimeout(() => {
      this.refs.content.classList.add('active');
    }, 900);
  }
  render() {
    return (
      <div className="detail">
        <div className="slides">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
        {
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div ref={'content'} className="detail__content" key={data.id + index}>
                <div ref={'cover'} className="detail__cover">
                  <div className="detail__cover--reflex">
                    <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                  </div>
                </div>
                <div ref={'infos'} className="detail__infos">
                  <section className="info__name">
                    <h2>Name</h2>
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
