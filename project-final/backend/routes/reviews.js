const router = require("express").Router();
let Review = require("../models/review.model");

router.route("/").get((req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add/:id").post((req, res) => {
  const review = req.body.review;
  const product_id = req.params.id;

  const newReview = new Review({
    product_id,
    review,
  });

  newReview
    .save()
    .then(() => res.json("Review added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Review.findOne({ product_id: req.params.id })
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json("Review deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/").get((req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
