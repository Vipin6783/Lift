const outsideLiftApi = require("../controller/outsideLiftController.js");

let express = require("express");

let outsideLiftRouter = express.Router();

outsideLiftRouter.get("/outsideLift/:liftNo", outsideLiftApi);

module.exports = outsideLiftRouter;
