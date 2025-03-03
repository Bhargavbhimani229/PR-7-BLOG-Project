const { Router } = require("express");

const blogRouter = Router();

const blogController = require("../controllers/blogController");

blogRouter.get("/blog", blogController.homePage);

module.exports = blogRouter;