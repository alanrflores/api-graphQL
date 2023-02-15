//esto apenas arranque la aplicación va a leer el archivo .env
require("dotenv").config();

const { connect } = require("mongoose");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    await connect(process.env.MONGO_URL);
    console.log("Mongo db connect");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDb };
