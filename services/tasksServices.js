const HttpError = require('../Utils/HttpError');
const Task = require('../models/Task');

const getTasksService = async () => {
  return await Task.find();
};

const getTaskByIdService = async id => {
  const task = await Task.findById(id);
  if (!task) {
    throw new HttpError(404, 'Task not found');
  }
  return task;
};

const createTaskService = async data => {
  return await Task.create(data);
};

const updateTaskServices = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  if (!task) {
    throw new HttpError(404, 'Task not found');
  }
  return task;
};

const deleteTaskServices = async id => {
  const task = await Task.findByIdAndRemove(id);
  if (!task) {
    throw new HttpError(404, 'Task not found');
  }
  return id;
};

module.exports = {
  getTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskServices,
  deleteTaskServices,
};
