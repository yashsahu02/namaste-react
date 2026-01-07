const RestaurantCard = ({resData}) => {
    const {name, cuisine, rating, image, deliveryTime } = resData;
    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/12/5/0d089f35-4c88-48c4-ae02-becf147a544f_564d1b7c-6fd6-4508-a35e-0f889a12c7de.jpg" 
                src={image} 
            />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h5>{rating}</h5>
            <h5>{deliveryTime}</h5>
        </div>
    );
};

export default RestaurantCard;