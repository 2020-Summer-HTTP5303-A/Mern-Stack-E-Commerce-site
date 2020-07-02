import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar.component";

const Review = (props) => (
  <tr>
    <td>{props.review.product_id}</td>
    <td>{props.review.review}</td>
    <td>
      Edit
    </td>
    <td>
      <a
        href="#"
        className="btn btn-danger"
        onClick={() => {
          props.deleteReview(props.review._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteReview = this.deleteReview.bind(this);

    this.state = { reviews: [],products:[] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/reviews/")
      .then((response) => {
        this.setState({ reviews: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteReview(id) {
    axios.delete("http://localhost:5000/reviews/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      reviews: this.state.reviews.filter((el) => el._id !== id),
    });
  }

  reviewList() {
    return this.state.reviews.map((currentReview) => {
      return (
        <Review
          review={currentReview}
          deleteReview={this.deleteReview}
          key={currentReview._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="px-5">
          <h3>Review List</h3>

          <table className="table table-striped table-bordered table-hover ">
            <thead className="thead-dark">
              <tr>
                <th width="10%">Product ID</th>
                <th width="10%">Review</th>
                <th colSpan="2" style={{ textAlign: "center", width: "10%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{this.reviewList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
