// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-2">Happy Valentine's Day!</h1>
      <p className="text-lg">
        I figured a card wouldn't arrive for a bit, so I thought it would be nice to make you something cute.
      </p>
      <p className="text-lg">
        Turns out I'm really bad at web development, but I hope you like it!
      </p>
    </header>
  );
};

export default Header;
