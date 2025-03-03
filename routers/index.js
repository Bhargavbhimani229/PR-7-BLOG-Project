const { Router } = require("express");

const indexRouter = Router();
const blogRouter = require("./blogRouter");

indexRouter.get("/", blogRouter);

module.exports = indexRouter;