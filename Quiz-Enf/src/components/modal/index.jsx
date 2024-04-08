import React from 'react';

const Modal = ({ isOpen, onClose, title, btnLabel, content}) => {
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
      <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
        <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="p-4 text-black text-justify">

        {content}

        </div>
        <div className="border-t px-4 py-2 flex justify-end">
          <button onClick={onClose} className="px-4 py-3 bg-indigo-500 text-white  rounded-md w-full sm:w-auto">{btnLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
