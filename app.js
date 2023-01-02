const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const smoothieRoutes = require("./routes/smoothieRoutes");
const calendarRoutes = require("./routes/calendarRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");

// database connection

const dbURI = process.env.dbURI;
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT);
    console.log("connected");
  })
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);
app.use(calendarRoutes);
