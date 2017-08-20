import React from 'react';
import Transition from './transition';

class DetailComic extends React.Component {
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
  createMarkup(markup) {
    return { __html: markup }
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
    }, 1200);
  }
  getDescription(description) {
    return description ? <p dangerouslySetInnerHTML={this.createMarkup(description)}></p> : ''
  }
  render() {
    return (
      <div className="detail">
        <Transition />
        {
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div ref={'content'} className="detail__content" key={data.id + index}>
                <div ref={'cover'} className="detail__cover">
                  <div className="detail__cover--reflex">
                    <img src={data.full} />
                  </div>
                </div>
                <div ref={'infos'} className="detail__infos">
                  <section className="info__name info__name--comic">
                    <h2>{data.title}</h2>
                    {this.getDescription(data.description)}
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
