import React from 'react';
import { Link } from 'react-router-dom'

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    console.clear();
    this.animate([...document.querySelectorAll('.grid a')]);
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
          elm.querySelector('.mask').classList.add('animate');
          elm.querySelector('img').attributes.src.value = '';
          elm.querySelector('img').attributes.src.value = image.src;
          setTimeout((elm1) => {
            requestAnimationFrame(() => {
              elm1.querySelector('img').classList.add('animate');
              elm1.querySelector('.mask').classList.add('animate-out');
            });
          }, 300, elm);
        };
        image.src = elm.querySelector('img').attributes['data-src'].value;
      }, index * 50, el);
    });
  }

  render() {
    return (
      <div className="grid">
        {
          this.props.data.map((data, index) => {
            return <Link to={{
              pathname: `/${this.props.filter}/detail/${data.id}`
            }} key={index}>
              <div className="mask"></div>
              <img data-src={data.thumb} src="/images/lazy.png"/>
            </Link>
          })
        }
      </div>
    );
  }
}
ImageList.propTypes = {
  data: React.PropTypes.array,
  filter: React.PropTypes.string
}
export default ImageList;
