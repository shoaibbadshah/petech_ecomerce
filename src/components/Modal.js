import React, { useState } from "react";

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-end z-50 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white shadow-lg w-full max-w-md p-6 overflow-auto">
        {children}
        <button
          type="button"
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg p-1.5"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
