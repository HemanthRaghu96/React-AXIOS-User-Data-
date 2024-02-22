import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering
import "./index.css"; // Importing CSS file for styling
import App from "./components/App"; // Importing the root component of the application
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

// Creating a root React DOM node to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application inside the root node
root.render(
  // Wrapping the entire application with BrowserRouter to enable routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
