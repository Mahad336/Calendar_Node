const { Router } = require("express");
const crouter = Router();
const calendarController = require("../controllers/calendarController");

crouter.post("/createEvent", calendarController.createEvent_post);
crouter.get("/createEvent", calendarController.createEvent_get);

crouter.get("/myEvents", calendarController.myEvents_get);
crouter.get("/calendar", calendarController.calender_home);

module.exports = crouter;
