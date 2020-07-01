import React, { Component } from "react";
import NavbarCSS from "../../components/header/Header.css";
import Navbar from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => (

  <div class="col-md-3 ">
    <div href="#" class="card card-product-grid shadow-lg">
        <img class="card-img-top" src={props.product.image} />
        <hr/>
        <div class="card-body">
          <h6 class="card-title d-inline font-weight-bold">{props.product.name}</h6><h6 class="card-title d-inline ml-4 font-weight-bold">${props.product.cost} CAD</h6>
            <Link to={"/view-product/" + props.product._id} className="btn btn-primary mt-3">Add to cart</Link>
            <Link to={"/view-product/" + props.product._id} className="btn btn-warning ml-5 mt-3">View</Link>
        </div>
    </div>
  </div>
  
);

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  productList() {
    return this.state.products.map((currentProduct) => {
      return <Product product={currentProduct} key={currentProduct._id} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <section class="section-name padding-y-sm">
          <div class="container">
            <header class="section-heading">
              <h3 class="section-title text-center my-5">Popular products</h3>
            </header>

            <div class="row">{this.productList()}</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
