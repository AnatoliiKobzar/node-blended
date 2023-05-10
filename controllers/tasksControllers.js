const {
  getTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskServices,
  deleteTaskServices,
} = require('../services/tasksServices');

const getTasks = async (req, res, next) => {
  try {
    const tasks = await getTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await getTaskByIdService(id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = await createTaskService(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateTask = await updateTaskServices(id, req.body);
    res.status(200).json(updateTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTaskServices(id);
    //   res.sendStatus(204);
    res.status(200).json({ id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
