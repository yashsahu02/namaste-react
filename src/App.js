import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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


/**
 * Props => Porps are just normal arguments to the function. (Passing props to a functional components is just passing arguments to a function.)
 * When we need to display data dynamically we pass it using props 
 * 
*/


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
