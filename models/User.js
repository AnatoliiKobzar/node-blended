const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model('user', schema);

module.exports = User;
