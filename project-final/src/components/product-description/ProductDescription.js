import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import ProductDescriptionCss from "../../components/product-description/ProductDescription.css";
import NavbarCSS from "../../components/header/Header.css";
import Navbar from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      vendor: "",
      description: "",
      cost: 0,
      image: "",
      date: new Date(),
      vendors: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          vendor: response.data.vendor,
          description: response.data.description,
          image: response.data.image,
          cost: response.data.cost,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get("http://localhost:5000/vendors/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          vendors: response.data.map((vendor) => vendor.name),
        });
      }
    });
  }

  render() {
    return (
      <div>
      <Navbar />
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="container">
          <div class="product-content product-wrap product-deatil">
            <div class="row">
              <div class="col-md-5 col-sm-12 col-xs-12">
                <div class="product-image">
                  <img
                    width="450px"
                    height="450px"
                    src={this.state.image}
                  ></img>
                </div>
              </div>
              <div class="col-md-7 col-sm-12 col-xs-12">
                <h2 class="Productname">
                  {this.state.name}
                  <small>
                    Sold by <a href="#">{this.state.vendor}</a>
                  </small>
                  <i class="fa fa-star fa-2x text-primary"></i>
                  <i class="fa fa-star fa-2x text-primary"></i>
                  <i class="fa fa-star fa-2x text-primary"></i>
                  <i class="fa fa-star fa-2x text-primary"></i>
                  <i class="fa fa-star fa-2x text-muted"></i>
                  <span class="fa fa-2x"></span>
                  <a href="#">1 customer reviews</a>
                </h2>
                <hr />
                <h3 class="price-container">${this.state.cost} CAD</h3>
                <div class="purchase">
                  <ul>
                    <li>
                      <button type="button" class="btn btn-warning">
                        ADD TO CART
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-primary">
                        BUY NOW
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-primary">
                        ADD TO WISHLIST
                      </button>
                    </li>
                  </ul>
                </div>
                <hr />
                <div class="description description-tabs">
                  <ul class="nav nav-tabs nav-fill">
                    <li class="active mr-auto">
                      <a
                        href="#more-information"
                        data-toggle="tab"
                        class="no-margin"
                      >
                        Description{" "}
                      </a>
                    </li>
                    <li class="mr-auto">
                      <a href="#specifications" data-toggle="tab">
                        Specifications
                      </a>
                    </li>
                    <li class="mr-auto">
                      <a href="#reviews" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active " id="more-information">
                      <br />
                      <strong>Description Title</strong>
                      <p>{this.state.description}</p>
                    </div>
                    <div class="tab-pane fade" id="specifications">
                      <p>Sample</p>
                    </div>
                    <div class="tab-pane fade" id="reviews">
                      <br />
                      <form
                        method="post"
                        class="well padding-bottom-10"
                        onsubmit="return false;"
                      >
                        <textarea
                          rows="2"
                          class="form-control mb-2"
                          placeholder="Write a review"
                        ></textarea>
                        <div class="margin-top-10 ">
                          <button
                            type="submit"
                            class="btn btn-sm btn-primary pull-right"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}
