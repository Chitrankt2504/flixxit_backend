const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const User = require("./models/UserModel");

const app = express();

app.use(
  cors({
    options: "*",
  })
);
app.use(express.json());

mongoose
  .connect("mongodb+srv://chitrankt1234:JaiHanuJan108@cluster0.8aza4wf.mongodb.net/flixxit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));
