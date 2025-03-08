const Blog = require("../models/blogmodel");
const fs = require("fs");
const userCred = require("../models/pwShema");

module.exports.homePage = async (req, res) => {
  let blogs;
  try {
    blogs = await Blog.find();
    return res.render("index", { blogs });
  } catch (error) {
    console.log(error.message);
    return res.render("index", { blogs: [] });
  }
};

module.exports.indexBlog = (req, res) => {
  return res.redirect("/homepage");
};

module.exports.formPage = (req, res) => {
  return res.render("pages/form");
};

// Create DataBase

module.exports.create = async (req, res) => {
  try {
    await Blog.create({ ...req.body, image: req.file.path });
    console.log(req.body);

    return res.render("pages/form");
  } catch (error) {
    return res.json({ message: error.message });
  }
};

// Delete Blog

module.exports.blogDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    fs.unlinkSync(blog.image);
    console.log("Blog deleted successfully");
    return res.redirect("/index");
  } catch (error) {
    console.log(error.message);
    return res.redirect("/index");
  }
};

// Edite Blog

module.exports.blogEdit = async (req, res) => {
  try {
    let { id } = req.params;
    let blog = await Blog.findById(id);
    console.log("Blog Pakday gayo...😂", blog);
    return res.render("./pages/edit.ejs", { blog });
  } catch (error) {
    console.log(error.message);
    return res.render("./pages/edit.ejs", { blog: {} });
  }
};

module.exports.blogUpdate = async (req, res) => {
  try {
    let { id } = req.params;
    let updateBlog = { ...req.body };

    if (req.file) {
      let blog = await Blog.findById(id);
      if (blog.image) {
        fs.unlinkSync(blog.image);
      }
      updateBlog.image = req.file.path;
    } else {
      updateBlog.image = req.body.old_image;
    }
    await Blog.findByIdAndUpdate(id, updateBlog);
    res.redirect("/index");
  } catch (error) {
    console.log(error.message);
    res.redirect("/index");
  }
};

// Blog View

module.exports.view = async (req, res) => {
  let { id } = req.params;
  const blogs = await Blog.findById(id);
  return res.render("pages/blogView", { blogs });
};

// SingUp

module.exports.singUp = (req, res) => {
  return res.render("pages/singUp");
};

// Login

module.exports.login = (req, res) => {
  return res.render("pages/login");
};

// Authentication

module.exports.createCred = async (req, res) => {
  let { password, confirmPw } = req.body;
  if (password === confirmPw) {
    await userCred.create(req.body);
    res.render("./pages/login", req.body);
  } else {
    console.log("Password & Confirm Password should be same!");
    res.render("./pages/login", req.body);
  }
};

module.exports.checkCred = async (req, res) => {
  let { username, password } = req.body;
  let cred = await userCred.findOne({ username });
  if (!cred) {
    console.log("User not found!");
    return res.redirect("/login");
  }

  if (cred.username === username && cred.password === password) {
    res.cookie("userId", cred.id);
    console.log("Cookie set:", cred.id);
    return res.redirect("/index");
  } else {
    console.log("Invalid credentials!");
    return res.redirect("/login");
  }
};

module.exports.logOut = (req, res) => {
  res.clearCookie("userId");
  console.log("User logged out, cookie removed.");
  return res.redirect("/login");
};
