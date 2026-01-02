import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * Header
 * - Logo
 * - Na Items
 * 
 * Body
 * - Search
 * - Restaurant Card Container (containing Restaurant Cards)
 *   - Restaurant Card
 *     - Image of Restaurant of food
 *     - Name of Restaurant
 *     - Start Rating of Restaurant
 *     - Cuisines
 *     - Delivery Time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */


// header component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg?semt=ais_hybrid&w=740&q=80" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/12/5/0d089f35-4c88-48c4-ae02-becf147a544f_564d1b7c-6fd6-4508-a35e-0f889a12c7de.jpg" 
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h5>4.7 ⭐</h5>
            <h5>35 - 40 Minute</h5>
        </div>
    )
}

/**
 * Props => Porps are just normal arguments to the function. (Passing props to a functional components is just passing arguments to a function.)
 * When we need to display data dynamically we pass it using props 
 * 
*/

// body component
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                {/* Restaurant Card */}
                <RestaurantCard 
                    resName="Guru Kripa Restaurant" 
                    cuisine="Indian, South Indian Foods"
                />
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
                <RestaurantCard resName="CSB" cuisine="Tea, Coffee"/>

                {/* passing key to react components is a good practice which helps react to uniqly identify the new element and don't rerender all just render the new one. This is very important for optimization purpose. */}
            </div>
        </div>
    )
}

// root level component
const AppLayout = () => {
    return (
        <div className="app">
            {/* Header Component */}
            <Header />
            <Body />
        </div>
    )
}

// let's create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
