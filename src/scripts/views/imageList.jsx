import React from 'react';
import { Link } from 'react-router-dom'

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animateStart: false,
      animateComplete: true
    }
  }
  componentDidMount() {
    this.imgs = [...document.querySelectorAll('a')];
  }
  componentWillReceiveProps(nextProps) {
    // this.animateOut();
  }
  componentWillUpdate(nextProps, nextState) {
    // if (nextProps.data && this.props.data.length) {
    //   if (nextProps.data[0].id === this.props.data[0].id) {
    //     this.animateOut();
    //   }
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    this.imgs = [...document.querySelectorAll('a')];
    // if (prevProps.data[0] === undefined) {
    //   return;
    // }

    setTimeout(() => {
      this.animate();
    }, 300);
  }
  animateOut() {
    // console.log('Out');
    this.imgs.map((el) => {
      el.classList.remove('fetched');
      el.classList.add('fetching');
    });
  }

  animate() {
    // console.log('In');
    this.imgs.map((el, index) => {
      setTimeout(() => {
        el.classList.remove('fetching');
        el.classList.add('fetched');
      }, index * 80);
    });
  }

  componentWillUnmount() {
    // console.log('ImageList componentWillUnmount');
  }
  render() {
  //  console.log('ImageList render');

    return (
      <div className="grid">
        {
          this.props.data.map((data, index) => {
            return <Link to={{
              pathname: `/${this.props.filter}/detail/${data.id}`
            }} key={index}>
              <img src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`} />
            </Link>
          })
        }
      </div>
    );
  }
}
ImageList.propTypes = {
  data: React.PropTypes.array,
  filter: React.PropTypes.string,
  pagination: React.PropTypes.object,
}
export default ImageList;
