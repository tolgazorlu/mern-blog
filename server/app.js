const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PostController = require("./controllers/PostController");

const Blog = require("./models/Blog");

mongoose
  .connect("mongodb://localhost:27017/mysources-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", PostController.getAllBlogs);
app.get("/blog/:id", PostController.getStory);

app.listen(3001, () => {
  console.log("Server is running...");
});
