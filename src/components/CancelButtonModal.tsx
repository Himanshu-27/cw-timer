import React from 'react'

interface CancelButtonModalProps {
    handleClose: () => void;
  }

export const CancelButtonModal: React.FC<CancelButtonModalProps> = ({ handleClose }) => {
  return (
    <button
      type="button"
      onClick={handleClose}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
    >
      Cancel
    </button>
  );
};
