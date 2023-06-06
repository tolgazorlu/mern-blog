const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ status: "fail" });
  }
};

exports.getStory = async (req, res) => {
  try {
    const story = await Blog.findOne(req.params.id);
    res.status(200).json(story);
  } catch (error) {
    res.status(400).json({ status: "fail" });
  }
};
