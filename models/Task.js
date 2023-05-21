const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('task', schema);

module.exports = Task;
