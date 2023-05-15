import { useState, useEffect, useCallback } from 'react';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    event => {
      if (event.keyCode === 27) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  const handleOverlayClick = useCallback(
    event => {
      if (event.target === event.currentTarget) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  return (
    <>
      {isModalOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
