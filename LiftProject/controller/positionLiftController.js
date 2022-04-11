const lastCallFloorPosition = require("../service/positionLiftService.js");

const positionLiftApi = async (req, res) => {
  const {
    params: { liftNo },
  } = req;
  console.log("LiftNo...................", liftNo);

  
      let floorNo = "UG-1";
    //   const floorNo = await positionLiftService.lastCallFloorPosition(liftNo);
       res.send(`Position of Lift No. ${liftNo} is at Floor No. ${floorNo}`); 
      
};

module.exports = positionLiftApi;
