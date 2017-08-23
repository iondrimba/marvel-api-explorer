import React from 'react';
import Transition from '../components/transition';

class DetailComic extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.refs.cover.querySelector('img').onload = () => {
      const titleH = this.refs.title.getBoundingClientRect().height;
      const viewH = document.body.clientHeight - 30 - titleH ;
      setTimeout(() => {

        this.refs.content.classList.add('active');
        this.refs.infos.style.transform = `translateY(${viewH}px)`;

        slides.reverse().map((el, index) => {
          setTimeout(() => {
            console.log('remove');
            el.classList.remove('active');
            el.classList.add('out');
          }, 600);
        });
      }, 300);

      document.querySelector('html').classList.add('disable-scroll');
    };

    let slides = [...document.querySelectorAll('.slides .first')];
    this.animateIn(slides);

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
  }
  getDescription(description) {
    return description ? <p dangerouslySetInnerHTML={this.createMarkup(description)}></p> : '';
  }
  render() {
    return (
      <div className="detail">
        <Transition />
        {
          this.props.data.map((data, index) => {
            if (data.id === Number(this.props.match.params.id)) {
              return <div ref={'content'} className="detail__content" key={data.id + index}>
                <section ref={'cover'} className="detail__cover">
                  <img src={data.full} />
                  <div className="detail__cover--reflex" style={{ backgroundImage: `url(${data.thumb})` }}>
                  </div>
                </section>
                <section ref={'infos'} className="detail__infos">
                  <div className="info__name info__name--comic">
                    <h2 ref={'title'}>{data.title}</h2>
                    {this.getDescription(data.description)}
                  </div>
                </section>
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
