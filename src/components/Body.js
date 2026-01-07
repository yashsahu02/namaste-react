// import RestaurantCard component
import RestaurantCard from "./RestaurantCard";
import { resList, resList } from "../utils/mockData";
import { useState } from "react"; 

// body component
const Body = () => {

    // Local State Variable -> Super powerful varaible of react

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // filter logic
                    const filteredList = listOfRestaurants.filter((res) => res.rating > 4);
                    setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {/* Restaurant Card */}
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard 
                            key={restaurant.id}
                            resData = {restaurant}
                        />
                    ))
                }
                {/* passing key to react components is a good practice which helps react to uniqly identify the new element and don't rerender all just render the new one. This is very important for optimization purpose. */}
            </div>
        </div>
    );
};

export default Body;
