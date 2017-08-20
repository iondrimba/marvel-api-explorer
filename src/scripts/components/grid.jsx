import React from 'react';
import { Link } from 'react-router-dom'

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    this.animate([...document.querySelectorAll('.grid .thumb')]);
  }
  animate(imgs) {
    imgs.map((el, index) => {
      setTimeout((elm) => {
        requestAnimationFrame(() => {
          elm.classList.remove('fetching');
          elm.classList.add('fetched');
        });

        var image = new Image();
        image.onload = function () {
          elm.querySelector('.thumb__mask').classList.add('animate');
          elm.querySelector('.thumb__file').attributes.src.value = '';
          elm.querySelector('.thumb__file').attributes.src.value = image.src;
          setTimeout((elm1) => {
            requestAnimationFrame(() => {
              elm1.querySelector('.thumb__file').classList.add('animate');
              elm1.querySelector('.thumb__mask').classList.add('animate-out');
            });
          }, 300, elm);
        };
        image.src = elm.querySelector('.thumb__file').attributes['data-src'].value;
      }, index * 50, el);
    });
  }

  render() {
    return (
      <div className="grid">
        {
          this.props.data.map((data, index) => {
            return <Link className="thumb" to={{
              pathname: `/${this.props.filter}/detail/${data.id}`
            }} key={index}>
              <div className="thumb__mask"></div>
              <img className="thumb__file" data-src={data.thumb} src="/images/missing.jpg"/>
            </Link>
          })
        }
      </div>
    );
  }
}
Grid.propTypes = {
  data: React.PropTypes.array,
  filter: React.PropTypes.string
}
export default Grid;
