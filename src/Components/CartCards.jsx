import React from 'react';

function CartCards(cartData) {

    const { id, name, price, description, imageId, rating, handleCart } = cartData?.cartData?.card?.info;

    const formattedPrice = price / 100 || 200;
    
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-xl bg-slate-300 rounded overflow-hidden shadow-lg m-4 flex w-3/4">
                <img className="w-1/3 m-4 rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt={name} />
                <div className="flex-1 px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-lg font-semibold">₹{formattedPrice}</p>
                    <p className="text-gray-700 text-base">{description ? description : `Order this delicious item 🤤`}</p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{rating ? rating : 3.9}⭐</span>
                        <button 
                            className="bg-orange-400 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => handleCart({ id, name, price: formattedPrice, description, imageId, rating })}
                        >
                            Place Order 🏍️
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCards;
