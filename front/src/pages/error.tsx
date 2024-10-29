
import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() =>navigate('/home') }
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
