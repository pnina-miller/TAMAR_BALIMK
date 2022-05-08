var createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
var logger = require("morgan");
const path = require("path");
require("dotenv").config();

const PersonRouter = require("./scr/routes/person");
const AnimalRouter = require("./scr/routes/animal");
const MembershipRouter = require("./scr/routes/membership");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/person", PersonRouter);
app.use("/animal", AnimalRouter);
app.use("/membership", MembershipRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("error while connecting to Mongoose ", err));

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
