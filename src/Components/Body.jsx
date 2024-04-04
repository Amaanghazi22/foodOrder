import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Shimmer from './Shimmer';
import { withPromotedLabel } from './withPromotedLabel';

function Body() {
    const [listRestro, setListRestro] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchData(){
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.242453&lng=86.9842256&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const response = await data.json();

            console.log(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setListRestro(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        fetchData();
    },[searchQuery]);
    
    function handleSearch() {
        const filteredRestro = listRestro.filter((restro) => restro?.info?.name?.toLowerCase().includes(searchQuery.toLowerCase()));
        setListRestro(filteredRestro);
    }

    // Higher Order component..
    const RestroCardPromoted = withPromotedLabel(FoodCard)

    return (
        <div className="flex flex-col items-center">
            <div className="relative mt-4">
                <input 
                    type="text"
                    placeholder='Search Restaurants...'
                    className='px-4 py-2 border border-gray-300 rounded-full outline-none focus:border-blue-300'
                    style={{ width: '300px' }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='absolute top-0 right-0 h-full px-4 bg-orange-400 text-white rounded-full'
                    onClick={handleSearch}
                    >Search</button>
            </div>
            {listRestro.length === 0 ? (
                <div >
                    <h1 className="text-2xl font-bold mb-4 mt-2 gap-10 px-10">Restaurants List Loading...</h1>
                    <Shimmer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-10'/>
                </div>
                
            ) : (
                <div>
                    <h1 className="text-2xl font-bold mb-4 mt-2 gap-10 px-10">Featured Restaurants</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-10'>
                        {listRestro.map(restro => (
                            restro.info.avgRating >= 4 ? 
                            <RestroCardPromoted key={restro.info.id} foodData={restro}/> :
                            <FoodCard key={restro.info.id} foodData={restro} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Body;
