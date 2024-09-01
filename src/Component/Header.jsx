import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700">
          EventLiteZ
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-green-700 text-black font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create-event" className="hover:text-green-700 text-black font-semibold">
                Create Event
              </Link>
            </li>
            {/* Add more navigation links here if needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
