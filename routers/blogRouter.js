const { Router } = require("express");

const blogController = require("../controllers/blogController");
const upload = require("../middlewares/blogImage");
const userAuth = require("../middlewares/userAuth");
const blogRouter = Router();

blogRouter.get("/homePage", blogController.homePage);
blogRouter.get("/index", blogController.indexBlog);
blogRouter.post("/create", upload, blogController.create);
blogRouter.get("/delete/:id", blogController.blogDelete);
blogRouter.get("/edit/:id", blogController.blogEdit);
blogRouter.post("/update/:id", upload, blogController.blogUpdate);
blogRouter.get("/blogView/:id", blogController.view);
blogRouter.get("/singUp", blogController.singUp);

blogRouter.get("/login", blogController.login);
blogRouter.post("/createCred", blogController.createCred);
blogRouter.post("/checkCred", blogController.checkCred);
blogRouter.get("/form",userAuth,blogController.formPage);

module.exports = blogRouter;
