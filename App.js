import React from "react";
import ReactDOM from "react-dom/client";

// React Element ->
/*

React element is similar to the dom element. At the end react element is an object and when we render this it becomes HTML element.

*/

// React Element using React 
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello React"
);

// JSX -> It is a syntax that is used to define React Elements

// We can do all the things without using JSX but JSX makes our work easier.
// JSX is not HTML in JS. It is HTML like syntax, it only looks like HTML or XML but not HTML or XML inside JavaScript. 

// JSX => React.createElement (JS Object) => HTMLElement(on rendering)
/* 
    JSX is in the form which can't be interpreted by JS Enginer so when we define react element using JSX syntax
    it uses Babel (Babel (a JS Compiler) is a JS transpiler which connvert the JSX into the form which can be understood by JS Engine) Parcel Manages or uses Babel to do this.
    JSX => React.createElement => ReactElement(JS Object) => HTML Element (rener)
    Behind the scenes JSX is converted to React Element
*/
const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;

// React Component ->
/*
There are two types of React Componenets
 1. Class Based Components -> OLD Way to use React Component
 2. Functional Components -> NEW way to use React Component

React Functional Components are nothing but a function that returns some JSX Code.
*/

const HeadingComponent = () => {
    return <h1>Namaste React using Functional Component</h1>;
};

// below are valid
const HeadingComponent2 = () => <h1>Namaste React 2 using Functional Component</h1>;

const HeadingComponent3 = () => {
    return <h1>Namaste React 3 using Functional Component</h1>;
};

const Title = () => (
    <h1 className="title">This is Title.</h1>
);

// Component Composition -> using a component inside another component
const Heading = () => (
    <div className="container">
        <Title />
        <h1 className="heading">
            Hello React. This is Heading.
        </h1>
        <h2>{100 + 400}</h2>
        {/* we can apply any piece of JS inside {} */}
    </div> 
);

// let's create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
