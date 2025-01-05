import React from 'react';

interface AlertBoxProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const AlertBox: React.FC<AlertBoxProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-bold">
          ×
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
