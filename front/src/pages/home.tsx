// components/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Our App</h1>
      <p className="text-gray-600 mb-6">Sign up or log in to continue.</p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
