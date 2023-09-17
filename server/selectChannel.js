const mongoose = require("mongoose");
const selectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  exists: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const SelectModel = mongoose.model("Select", selectSchema);

module.exports = SelectModel;
