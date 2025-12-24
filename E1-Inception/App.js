const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1", {id: "heading1"}, "I'm an h1 tag"), React.createElement("h2", {id: "heading2"}, "I'm an h2 tag")]
    )
)

const heading = React.createElement(
    "h1", 
    {id: "heading", xyz:"xyz-value"},
    // {} is object used to pass attributes and their vales in react 
    "Hello World! from React..."
);
// let's create a root element because whatever react can do only inside that root 
// whatever it can render or manipulate DOM only do inside that root 

const root = ReactDOM.createRoot(document.getElementById("root")); // we created the div with id "root" as root for out react 
root.render(parent) // This will render heading inside the root and will show "Hello World! from React..." on web page
    