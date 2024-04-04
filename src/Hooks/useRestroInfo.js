import React from "react";
import { useState, useEffect } from "react";

const useRestroInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.242453&lng=86.9842256&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
                
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                const itemCards = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                
                setResInfo(itemCards);
            } catch (error) {
                console.error("Error fetching restaurant info:", error);
            }
        }

        fetchData();
    }, [resId]);

    return resInfo;
}

export default useRestroInfo;
