const insideLiftApi = require("../controller/insideLiftController.js");

let express = require("express");

let insideLiftRouter = express.Router();

insideLiftRouter.get("/insideLift/:floorNo", insideLiftApi);




module.exports = insideLiftRouter;
