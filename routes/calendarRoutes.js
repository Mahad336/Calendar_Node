const { Router } = require("express");
const crouter = Router();
const calendarController = require("../controllers/calendarController");

crouter.post("/createEvent", calendarController.createEvent_post);
crouter.get("/createEvent", calendarController.createEvent);
crouter.get("/calendar/:id/edit", calendarController.event_edit);
crouter.put("/calendar/:id/edit", calendarController.event_edit_put);
crouter.delete("/calendar/:id/edit", calendarController.event_delete);
crouter.get("/myEvents", calendarController.myEvents);
crouter.get("/calendar", calendarController.calender_home);

module.exports = crouter;
