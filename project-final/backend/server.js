const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const productRouter = require("./routes/products");
const vendorRouter = require("./routes/vendors");
const userRouter = require("./routes/users");
const reviewRouter = require("./routes/reviews");

app.use("/products", productRouter);
app.use("/vendors", vendorRouter);
app.use("/users", userRouter);
app.use("/reviews",reviewRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
