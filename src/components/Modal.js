import React from 'react';
import { X } from 'lucide-react'; // Import the X icon from lucide-react

const Modal = ({ isOpen, onClose, countryDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-60" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-lg mx-4 z-60 transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors duration-300 rounded-full p-2 hover:bg-gray-200"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        {/* Modal Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{countryDetails.country}</h2>
          <p className="text-lg text-gray-700">{countryDetails.capital}</p>
        </div>
        
        {/* Modal Body */}
        <div className="space-y-4">
          <p className="text-lg text-gray-800"><strong>Population:</strong> {countryDetails.population.toLocaleString()}</p>
          <p className="text-lg text-gray-800"><strong>Official Language:</strong> {Array.isArray(countryDetails.official_language) ? countryDetails.official_language.join(', ') : countryDetails.official_language}</p>
          <p className="text-lg text-gray-800"><strong>Currency:</strong> {countryDetails.currency}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
