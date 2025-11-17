import React from 'react';
import Loader from './Loader';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="mb-8">
        <Loader />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#1e4620] mb-4">Kumar & Co.</h2>
        <p className="text-[#2d5f2e] text-lg">Loading your experience...</p>
        <div className="mt-4 text-sm text-gray-500">Since 1999</div>
      </div>
    </div>
  );
};

export default PageLoader;