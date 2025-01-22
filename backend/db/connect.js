const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://azad:azad@cluster0.09wfibu.mongodb.net/SaurabhNews?retryWrites=true&w=majority&appName=Cluster0"
);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose is connected to database");
});

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
