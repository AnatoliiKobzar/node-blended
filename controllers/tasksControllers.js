const {
  getTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskServices,
  deleteTaskServices,
} = require('../services/tasksServices');
const controllerWrapper = require('../Utils/controllerWrapper');

let getTasks = async (req, res) => {
  const { page = 1, limit = 10, completed } = req.query;
  const tasks = await getTasksService(page, limit, completed);
  res.status(200).json(tasks);
};

getTasks = controllerWrapper(getTasks);

const getTaskById = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await getTaskByIdService(id);
  res.status(200).json(task);
});

const createTask = controllerWrapper(async (req, res) => {
  const newTask = await createTaskService(req.body);
  res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const updateTask = await updateTaskServices(id, req.body);
  res.status(200).json(updateTask);
});

const deleteTask = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  await deleteTaskServices(id);
  res.status(200).json({ id });
});

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
