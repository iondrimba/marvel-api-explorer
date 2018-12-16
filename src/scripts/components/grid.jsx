import React from 'react';
import GridItem from './grid-item';
import PropTypes from 'prop-types';

class Grid extends React.Component {
  constructor(props) {
    super(props);
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

        let image = new Image();
        const file = elm.querySelector('.thumb__file');
        const mask = elm.querySelector('.thumb__mask');
        const title = elm.querySelector('.thumb__title');

        image.onload = function () {
          mask.classList.add('animate');
          file.attributes.src.value = '';
          file.attributes.src.value = image.src;
          setTimeout((el) => {
            requestAnimationFrame(() => {
              file.classList.add('animate');
              mask.classList.add('animate-out');

              if (image.src.indexOf('missing') > -1) {
                title.classList.add('show');
              }

            });
          }, 300, elm);
        };
        image.src = file.attributes['data-src'].value;
      }, index * 50, el);
    });
  }

  render() {
    return (
      <div className="grid">
        {
          this.props.data.map((data, index) => {
            return <GridItem title={`${data.name ? data.name : data.title}`} id={data.id} filter={this.props.filter} thumb={data.thumb} key={index} />
          })
        }
      </div>
    );
  }
}

Grid.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string
}

export default Grid;
