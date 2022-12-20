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
    },
    eTime: {
      type: String,
    },
    createdBy: {
      type: String,
      required: true,
    },
    isallday: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const calendarEvent = mongoose.model("Event", calendarEventSchema);
module.exports = calendarEvent;
