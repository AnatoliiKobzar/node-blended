const express = require('express');
const validateBody = require('../Utils/validateBody');
const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require('../Utils/validation/taskValidationSchemas');

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksControllers');
const router = express.Router();

router.get('/', getTasks);

router.get('/:id', getTaskById);

router.post('/', validateBody(createTaskValidationSchema), createTask);

router.patch('/:id', validateBody(updateTaskValidationSchema), updateTask);

router.delete('/:id', deleteTask);

module.exports = {
  tasksRouter: router,
};
