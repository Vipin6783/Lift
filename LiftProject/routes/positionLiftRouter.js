const positionLiftApi = require("../controller/positionLiftController.js");

let express = require("express");

let positionLiftRouter = express.Router();

positionLiftRouter.get("/positionLift/:liftNo", positionLiftApi);




module.exports = positionLiftRouter;
