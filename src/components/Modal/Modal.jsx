import { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      onClose();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="overlay" onClick={handleCloseModal}>
          <div className="modal">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
