import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';
import data from './Data.json';
import Modal from './Modal'; 

const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      if (query) {
        const lowerQuery = query.toLowerCase();
        const filtered = data.filter(item =>
          item.country.toLowerCase().includes(lowerQuery) ||
          item.capital.toLowerCase().includes(lowerQuery)
        ).slice(0, 5); 
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
      setLoading(false);
    };

    fetchSuggestions();
  }, [query]);

  const handleResultClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 mt-5">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-none shadow-md focus:outline-none focus:ring-2 focus:ring-black bg-black bg-opacity-70 text-white placeholder-gray-400 transition duration-300 ease-in-out"
      />
      
      {/* Suggestions List */}
      {loading ? (
        <SkeletonLoader count={5} className="absolute w-full bg-black bg-opacity-70 border border-gray-300 rounded-none shadow-lg mt-2" />
      ) : (
        suggestions.length > 0 && (
          <ul className="absolute w-full bg-black bg-opacity-70 border border-gray-300 rounded-none shadow-lg mt-2">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-4 border-b last:border-b-0 hover:bg-black bg-opacity-80 text-white cursor-pointer transition duration-200 ease-in-out"
                onClick={() => handleResultClick(item)}
              >
                <div className="font-semibold text-white">{item.country}</div>
                <div className="text-sm text-gray-400">{item.capital}</div>
              </li>
            ))}
          </ul>
        )
      )}

      {/* Modal */}
      {selectedCountry && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          countryDetails={selectedCountry}
        />
      )}
    </div>
  );
};

export default SearchCountry;
