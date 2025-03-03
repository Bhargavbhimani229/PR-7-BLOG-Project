const { Router } = require("express");

const blogRouter = Router();

const blogController = require("../controllers/blogController");

blogRouter.get("/", blogController.homePage);

module.exports = blogRouter;