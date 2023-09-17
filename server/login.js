const mongoose = require("mongoose");
const logInSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LogInModel = mongoose.model("login", logInSchema);

module.exports = LogInModel;
