import React, { Component } from 'react';
import Loader from 'react-content-loader';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

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
  }
}
export default Spinner;
