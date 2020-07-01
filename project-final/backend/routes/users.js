const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        throw new Error("User exists already.");
      }
    })
    .then((user) => {
      const email = req.body.email;
      const password = req.body.password;

      const newUser = new User({
        email,
        password,
      });

      newUser
        .save()
        .then(() => res.json("User added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json(err.toString()));
});

router.route("/addtocart/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.cart.push(req.body.cart);

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((User) => res.json(User.cart))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/removefromcart/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.cart.pull(req.body.cart);

      user
        .save()
        .then(() => res.json("Product removed!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
