const mongoose = require("mongoose");
const channelSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  TargetCurrency: {
    type: String,
    required: true,
  },

  BaseCurrency: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  exists: {
    type: String,
    required: true,
  },
});

const ChannelModel = mongoose.model("Channel", channelSchema);

module.exports = ChannelModel;
