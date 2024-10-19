const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserModel = require("./models/Accounts");

// configure the connections
const app = express();
app.use(express.json());
app.use(cors({ origin: `http://localhost:${process.env.PORT} || 3000` }));

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.syzy1.mongodb.net/scratch")
  .then(() => console.log("Connected to MongoDB"));

app.post("/", (req, res) => {
  const { user, pass } = req.body;

  // send the data to the database
  const userr = new UserModel({ user, pass });
  userr.save();
  res.send("Done");
});

app.listen(process.env.PORT || "3001", () => {
  console.log("Server is Running");
});
