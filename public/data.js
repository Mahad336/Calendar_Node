const ArrayOfEvents = [
  /* ADD OBJECT HERE TO RENDER ON SCREEN */
  /* please follow the the give format for the object */

  /* 
    
    REQUIRED FORMAT FOR THE OBJECT:


    {
       Ename: "sample Item",Eloc: "sample Location",sTime: "9:00am",eTime: "10:00am"
    },



     */

  {
    Ename: "sample Item",
    Eloc: "sample Location",
    sTime: "9:30am",
    eTime: "10:00am",
  },

  {
    Ename: "sample Item",
    Eloc: "sample Location",
    sTime: "9:00am",
    eTime: "12:30pm",
  },
  {
    Ename: "sample Item",
    Eloc: "sample Location",
    sTime: "5:00pm",
    eTime: "8:00pm",
  },
];
/*CHANGE PARAMETERS HERE TO CHANGE ALL DAY  */

const allDay = [
  {
    name: "meeting",
    loc: "LHR",
  },
];

export { ArrayOfEvents, allDay };
