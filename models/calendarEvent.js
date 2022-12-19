const mongoose = require("mongoose");

const calendarEventSchema = new mongoose.Schema(
  {
    Ename: {
      type: String,
      required: true,
    },
    Eloc: {
      type: String,
      required: true,
    },
    sTime: {
      type: String,
      required: true,
    },
    eTime: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const calendarEvent = mongoose.model("Event", calendarEventSchema);
module.exports = calendarEvent;
