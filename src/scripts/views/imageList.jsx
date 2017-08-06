import React from 'react';
import { Link } from 'react-router-dom'

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    this.animate([...document.querySelectorAll('a')]);
  }
  animate(imgs) {
    imgs.map((el, index) => {
      setTimeout(() => {
        el.classList.remove('fetching');
        el.classList.add('fetched');
      }, index * 50);
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
