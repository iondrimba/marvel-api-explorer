import React from 'react';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          this.props.images.map((data, index) => {
            return <img key={index} src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`} />
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
