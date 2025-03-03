const { Router } = require("express");

const adminController = require('../controllers/adminController');

const adminRouter = Router();
adminRouter.get('/admin',adminController.homePage);

module.exports = adminRouter;