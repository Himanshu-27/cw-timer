import { X } from "lucide-react";
import React from "react";

interface CloseButtonModal {
  handleClose: () => void;
}

export const CloseButtonModal: React.FC<CloseButtonModal> = ({
  handleClose,
}) => {
  return (
    <button
      onClick={handleClose}
      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
    >
      <X className="w-5 h-5" />
    </button>
  );
};
