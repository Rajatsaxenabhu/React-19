import React from 'react';
import { Link } from 'react-router-dom';
import LogoutLink from '../pages/logout';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-fuchsia-500 text-white min-w-full min-h-20 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h2 className="text-5xl font-bold ">ChatX</h2>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
          </li>
          <li>
            <Link to="" className="hover:bg-gray-700 px-3 py-2 rounded">About</Link>
          </li>
          <li>
            <Link to="" className="hover:bg-gray-700 px-3 py-2 rounded">Services</Link>
          </li>
          <li>
            <LogoutLink/>     
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
