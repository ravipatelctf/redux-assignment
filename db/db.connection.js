
const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to database successfully.");
    })
    .catch((error) => {
      console.error("Failed to connect to database", error);
    })
}

module.exports = { initializeDatabase };