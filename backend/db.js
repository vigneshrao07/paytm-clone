const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vignesh45:Rohitsharma%401@cluster0.levgxkf.mongodb.net/paytmdatabase"
);


//schema for user table
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
    maxlength: 50,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
