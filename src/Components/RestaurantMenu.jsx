import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestroInfo from '../Hooks/useRestroInfo';
import MenuCard from './MenuCard'; 
import { useDispatch } from 'react-redux';
import { addItems } from '../app/cartSlice';

function RestaurantMenu() {
  
  const { resId } = useParams();
  const [restroData, setRestroData] = useState(null);
  const dispatch = useDispatch()

  const resInfo = useRestroInfo(resId);
  
  useEffect(() => {
    if(resInfo){
      setRestroData(resInfo);
    }
  }, [resInfo])

  const handleCart = (menuData) => {
    dispatch(addItems(menuData))
  }

  return (
    <div>
      {restroData && restroData.map((menuData) => (
        <MenuCard
          key={menuData?.card?.info?.id}
          name={menuData?.card?.info?.name}
          price={menuData?.card?.info?.price / 100 ? menuData?.card?.info?.price / 100 : menuData?.card?.info?.defaultPrice / 100} 
          description={menuData?.card?.info?.description}
          imageSrc={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuData?.card?.info?.imageId}`}
          rating={menuData?.card?.info?.ratings?.aggregatedRating?.rating}
          addToCart={() => handleCart(menuData)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
