// Modal.jsx
import React from "react";
import "./modal.css";

function Modal({ showModal, closeModal }) {
  const handleLogout = () => {
    // Perform logout action here
    closeModal();
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to log out?</p>
            <div>
              <button onClick={handleLogout}>Yes</button>
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
