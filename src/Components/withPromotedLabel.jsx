import React from 'react';

export const withPromotedLabel = (FoodCard) => {
  return (resData) => {
    return (
      <div className="relative mb-4">
        <FoodCard {...resData}/>
        <label className='absolute bottom-2 left-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg rounded-br-lg font-bold'>20% Discount 👑</label>
      </div>
    );
  };
};
