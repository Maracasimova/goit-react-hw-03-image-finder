import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      className="ImageGalleryItem-image"
      onClick={onClick}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
ImageGalleryItem.defaultProps = {
  tags: '',
};

export default ImageGalleryItem;
