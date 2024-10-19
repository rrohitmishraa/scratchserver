// get mongoose
const mongoose = require("mongoose");

// create schema
const DataSchema = new mongoose.Schema({
  user: String,
  pass: String,
});

// create collection
const BatchModel = new mongoose.model("accounts", DataSchema);

// export collection
module.exports = BatchModel;
