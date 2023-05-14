import React from 'react';

const Button = ({ onLoadMore, hasMore }) => {
  return hasMore ? (
    <button type="button" onClick={onLoadMore} className="Button">
      Load more
    </button>
  ) : null;
};

export default Button;
