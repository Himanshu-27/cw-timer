import React from "react";

interface SubmitModalButtonProps {
    text: string
    isTitleValid: boolean
    isTimeValid: boolean
}

export const SubmitModalButton: React.FC<SubmitModalButtonProps> = ({ text, isTitleValid, isTimeValid }) => {
  return (
    <button
      type="submit"
      className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
        isTitleValid && isTimeValid
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-blue-400 cursor-pointer"
      }`}
    >
      {text}
    </button>
  );
};
