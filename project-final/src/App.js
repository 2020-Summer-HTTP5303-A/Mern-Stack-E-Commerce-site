import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ProductList from "./components/product-list.component";
import EditProduct from "./components/edit-product.component";
import CreateProduct from "./components/create-product.component";
import CreateVendor from "./components/create-vendor.component";
import HomePage from "./components/homepage/HomePage";
import ViewProduct from "./components/product-description/ProductDescription";
import ReviewList from "./components/reviews/review-list.component";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" exact component={ProductList} />
        <Route path="/product/edit/:id" component={EditProduct} />
        <Route path="/product/create" component={CreateProduct} />
        <Route path="/vendor" component={CreateVendor} />
        <Route path="/view-product/:id" component={ViewProduct} />
        <Route path="/reviews" component={ReviewList} />

      </div>
    </Router>
  );
}

export default App;
