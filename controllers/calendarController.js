const CalendarEvent = require("../models/calendarEvent");
const { currUser } = require("../middleware/authMiddleware");

module.exports.createEvent_post = (req, res) => {
  let calendarEvent = new CalendarEvent(req.body);
  calendarEvent
    .save()
    .then((result) => {
      res.status(201).json(result);
      console.log("event saved Successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.createEvent_get = (req, res) => {
  res.render("createEvent", { url: req.url });
};

module.exports.myEvents_get = (req, res) => {
  CalendarEvent.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.calender_home = (req, res) => {
  CalendarEvent.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("calendar");
    })
    .catch((err) => {
      console.log(err);
    });
};
