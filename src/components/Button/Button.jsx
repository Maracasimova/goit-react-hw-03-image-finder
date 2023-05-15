import React from 'react';
import style from './Button.module.css'

const Button = ({ onLoadMore, hasMore }) => {
  const handleClick = () => {
    if (hasMore) {
      onLoadMore();
    }
  };

  if (!hasMore) {
    return null;
  }

  return (
    <button type="button" onClick={handleClick} className={style.Button}>
      Load more
    </button>
  );
};

export default Button;
