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
module.exports.createEvent = (req, res) => {
  res.render("createEvent", { url: req.url });
};

module.exports.myEvents = (req, res) => {
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
      res.render("calendar", { eventt: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.event_edit = async (req, res) => {
  const id = req.params.id;
  let rslt = await CalendarEvent.findById(id);

  res.render("createEvent", {
    url: req.url,
    body: rslt,
  });
};
module.exports.event_edit_put = (req, res) => {
  const id = req.params.id;
  CalendarEvent.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.json({ redirect: "/calendar" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.event_delete = (req, res) => {
  const id = req.params.id;
  CalendarEvent.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/calendar" });
    })
    .catch((err) => {
      console.log(err);
    });
};
