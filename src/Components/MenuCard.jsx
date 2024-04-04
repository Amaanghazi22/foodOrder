import React, {useState} from 'react';

function MenuCard({ name, price, description, imageSrc, rating, addToCart}) {

    const [cartStatus, setCartStatus] = useState("Add to Cart");

    const handleClick = () => {
        setCartStatus("Item Added");
        addToCart();
    };

    return (
        <div className="flex justify-center items-center">
        <div className="max-w-xl rounded overflow-hidden shadow-lg m-4 flex w-3/4 bg-orange-100">
            <img className="w-1/3 m-4 rounded-lg" src={imageSrc} alt={name} />
            <div className="flex-1 px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-lg font-semibold">₹{price}</p>
                <p className="text-gray-700 text-base">{description ? description : `Order this delicious item 🤤` }</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{rating ? rating : 3.9}⭐</span>
                    <div>
                        <button 
                            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={handleClick}
                            >{cartStatus}</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default MenuCard;
