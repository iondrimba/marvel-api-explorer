import React from 'react';
import { Link } from 'react-router-dom'

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          this.props.images.map((data, index) => {
            return <Link to={{
              pathname: `/detail/${data.id}`
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
  images: React.PropTypes.array,
}
export default ImageList;
