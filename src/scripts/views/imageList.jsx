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
          this.props.characters.map((data, index) => {
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
  characters: React.PropTypes.array,
  filter: React.PropTypes.string,
}
export default ImageList;
