import React, { Component } from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    this.setIsModalOpen(this.props.isOpen);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setIsModalOpen(this.props.isOpen);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setIsModalOpen = isOpen => {
    this.setState({ isModalOpen: isOpen }, () => {
      if (isOpen) {
        document.addEventListener('keydown', this.handleKeyDown);
      } else {
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    });
  };

  handleCloseModal = () => {
    this.setIsModalOpen(false);
    this.props.onClose();
  };

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.handleCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.handleCloseModal();
    }
  };

  render() {
    const { isModalOpen } = this.state;
    const { imageUrl } = this.props;

    return (
      <>
        {isModalOpen && (
          <div className={style.overlay} onClick={this.handleOverlayClick}>
            <div className={style.modal}>
              <img src={imageUrl} alt="" />
            </div>
          </div>
        )}
      </>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Modal;
