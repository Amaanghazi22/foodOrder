import React from 'react';

function Shimmer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300 animate-pulse">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="bg-gray-200 h-5 w-20 rounded"></div>
              <div className="bg-gray-200 h-5 w-10 rounded"></div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="bg-gray-200 h-5 w-40 rounded"></div>
              <div className="bg-gray-200 h-5 w-20 rounded"></div>
            </div>
            <div className="flex justify-end mt-2">
              <div className="bg-gray-200 h-8 w-24 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
