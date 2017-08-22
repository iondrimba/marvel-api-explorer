import React from 'react';
import Infos from '../components/infos'
import Transition from '../components/transition';

class DetailCharacter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.refs.cover.querySelector('img').onload = () => {
      const coverHeight = this.refs.cover.getBoundingClientRect().height;
      this.refs.infos.style.transform = `translateY(${coverHeight}px)`;
      document.querySelector('html').classList.add('disable-scroll');
    };
    this.animateIn([...document.querySelectorAll('.slides div')]);
  }
  componentWillUnmount() {
    document.querySelector('html').classList.remove('disable-scroll');
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
    }, 600);
  }
  render() {
    return (
      <div className="detail">
        <Transition/>
        {
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div ref={'content'} className="detail__content" key={data.id + index}>
                <section ref={'cover'} className="detail__cover">
                  <div className="detail__cover--reflex">
                    <img src={data.full} />
                  </div>
                </section>
                <section ref={'infos'} className="detail__infos">
                  <div className="info__name">
                    <h2>{data.name}</h2>
                  </div>
                  <Infos title="Series" type="series" data={data.series.items || []}></Infos>
                  <Infos title="Stories" type="stories" data={data.stories.items || []}></Infos>
                </section>
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
