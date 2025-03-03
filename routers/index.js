const { Router } = require("express");

const indexRouter = Router();
const blogRouter = require("./blogRouter");
const adminRouter = require("./adminRouter");

indexRouter.get("/blog", blogRouter);
indexRouter.get('/admin',adminRouter)

module.exports = indexRouter;