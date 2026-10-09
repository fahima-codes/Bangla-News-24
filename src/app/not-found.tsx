import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
      <div className="text-center max-w-md w-full">
        <div className="relative mb-8">
          <h1 className="text-[120px] font-black text-red-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-200 rotate-3">
              !
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The news you are looking for has been lost in the world. Maybe
          it was deleted or moved.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-colors shadow-md shadow-red-200"
          >
            Go Home
          </Link>
          <Link
            href="/news"
            className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full border border-gray-200 transition-colors"
          >
            Browse News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
