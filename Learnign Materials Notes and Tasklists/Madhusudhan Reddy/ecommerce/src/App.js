import React from 'react';
import "./components/header/Header.css";
import "./components/product-description/ProductDescription.css";
import Header from "./components/header/Header";
//import Footer from "./components/footer/Footer";
import HomePage from "./components/homepage/HomePage";
//import ProductDescription from "./components/product-description/ProductDescription";
import Carousel from "./components/carousel/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>

    </div>
  );
}

export default App;
