import React from "react";
import "./App.css"
import { Navbar } from "./pages/Navbar";
import TestApi from "./TestApi/TestApi";
import Products from "./Components/Products.jsx";

function App(){
  return(
    <div>
      <p>Test</p>
      <Navbar />
      <Products />
    </div>
  )
}

export default App;