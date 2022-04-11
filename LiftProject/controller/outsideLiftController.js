const outsideLiftApi = (req, res) => {
  const liftAvailable = true;
  const { 
    params: { liftNo },
  } = req;

  switch (liftAvailable) {


    case "Person at Bottom most (only Up button available)":
      switch (liftAvailable) {
        case "both Lifts are at bottom floor":
          break;
        case "One Lift is at bottom floor":
          break;
        case "No Lifts are at bottom floor":
          console.log("");
          break;
        default:
          console.log(`Sorry, Lift is out of service`);
      }

    //   break;
    // case "Person at between Top and Bottom Floor":
    //   switch (liftAvailable) {
    //     case "both Lifts are at bottom floor":
    //       break;
    //     case "One Lift is at bottom floor":
    //       break;
    //     case "No Lifts are at bottom floor":
    //       console.log("");
    //       break;
    //     default:
    //       console.log(`Sorry, Lift is out of service`);
    //   }

    //   break;
    // case "Person at Top most (only down button available)":
    //   switch (liftAvailable) {
    //     case "both Lifts are at bottom floor":
    //       break;
    //     case "One Lift is at bottom floor":
    //       break;
    //     case "No Lifts are at bottom floor":
    //       console.log("");
    //       break;
      //   default:
      //     console.log(`Sorry, Lift is out of service`);
      // }

      break;
    default:
      console.log(`Sorry, Lift is out of service`);
  }

  /*  CASE A : Person at Bottom most (only Up button available)(Press Up button)
   [
   Case 1 : both Lifts are at bottom floor 
   do - Open left Lift door
   
   Case 2 : One Lift is at bottom floor 
   do - open the Lift door 
   
   Case 3 : No Lifts are at bottom floor
   do - call nearest Lift and open the Lift door
   ]
CASE B: Person at between Top and Bottom Floor (both Up and down button available)(Press down or Up button)
[
Case 1 : both Lifts are at same floor 
do - Open left Lift door

Case 2 : One Lift is at same floor 
do - open the Lift door 

Case 3 : No Lifts are at same floor
do - call nearest Lift and open the Lift door
]

CASE C : Person at Top most (only down button available)(Press down button)
[
Case 1 : both Lifts are at Top floor 
do - Open left Lift door

Case 2 : One Lift is at Top floor 
do - open the Lift door 

Case 3 : No Lifts are at Top floor
do - call nearest Lift and open the Lift door
]

   */

  // res.send(" Outside Lift Api is ready");

res.send()

};

module.exports = outsideLiftApi;
