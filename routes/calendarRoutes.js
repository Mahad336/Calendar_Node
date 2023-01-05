const { Router } = require("express");
const calenderRouter = Router();
const calendarController = require("../controllers/calendarController");
const { requireAuth } = require("../middleware/authMiddleware");

calenderRouter.post("/createEvent", calendarController.createEvent_post);
calenderRouter.get("/createEvent", calendarController.createEvent);
calenderRouter.get("/calendar/:id/edit", calendarController.event_edit);
calenderRouter.put("/calendar/:id/edit", calendarController.event_edit_put);
calenderRouter.delete("/calendar/:id/edit", calendarController.event_delete);
calenderRouter.get("/myEvents", calendarController.myEvents);
calenderRouter.get("/calendar", requireAuth, calendarController.calender_home);

module.exports = calenderRouter;
