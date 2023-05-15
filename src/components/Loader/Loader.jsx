import React, { useState, useEffect } from 'react';
import Loader from 'react-content-loader';

const Spinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="spinner">
      {isLoading ? (
        <Loader
          height={140}
          speed={1}
          backgroundColor={'#d6d2c7'}
          foregroundColor={'#999'}
          viewBox="0 0 380 70"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Spinner;
