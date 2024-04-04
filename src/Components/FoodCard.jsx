import React from 'react';
import { Link } from 'react-router-dom';

function FoodCard({ foodData }) {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, id } = foodData.info;
  const deliveryTime = foodData.info.sla.deliveryTime;

  
  return (
    <Link to={`/restaurants/${id}`} className="block mb-6">
      <div className="rounded-lg shadow-md overflow-hidden border border-black-300 bg-slate-200">
        <div className="relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt={name}
            className="h-40 w-full object-cover rounded-t-lg"
          />
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
            {avgRating} {/* Display average rating on the top left corner */}
          </div>
          <div className="absolute top-0 right-0 bg-gray-800 text-white px-2 py-1 rounded-tl-lg rounded-br-lg">
            {deliveryTime} mins {/* Display delivery time on the top right corner */}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">Cuisines: {cuisines.join(', ')}</p>
          <p className="text-md text-gray-600">Cost for Two: {costForTwo}</p>
          <div className="flex justify-end mt-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-300">Show Menu</button>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default FoodCard;
