const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
  {
    product_id: { type: String, required: true },
    review: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("Review", reviewsSchema);

module.exports = Reviews;
