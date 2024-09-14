import React from 'react';

const SkeletonLoader = ({ count }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full h-12 bg-gray-700 mb-2 mt-2 rounded-lg opacity-50"></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
