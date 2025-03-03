const Blog = require("../models/blogmodel");

module.exports.homePage = (req, res) => {
  res.render("index");
};