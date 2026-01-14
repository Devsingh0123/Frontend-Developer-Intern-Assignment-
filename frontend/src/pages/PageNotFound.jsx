import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-xl shadow-lg">
        
        {/* Emoji / Illustration */}
        <div className="text-6xl mb-4">😕</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6 text-sm">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Go to Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};



export default PageNotFound