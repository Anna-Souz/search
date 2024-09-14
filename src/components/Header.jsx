
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black bg-opacity-50 p-6 shadow-md text-white text-center rounded-lg">
      <h1 className="text-4xl font-bold animate_animated animatefadeIn animate_delay-1s">
      Country Quest {/* or your chosen name */}
      </h1>
      <p className="text-lg mt-2 animate_animated animatefadeIn animate_delay-2s">
        Search for countries and capitals.
      </p>
    </header>
  );
};

export default Header;
