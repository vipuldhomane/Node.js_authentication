require("dotenv").config();
const mongoose = require("mongoose");
console.log(process.env.DATABASE_URL);
exports.connectMonggose = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    })
    .then((e) => console.log("Connected to Mongodb =>> Nodejs Authentication"))
    .catch((e) => console.log("Not Connect Mongodb"));
};
