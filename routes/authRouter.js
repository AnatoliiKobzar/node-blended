const express = require('express');
const router = express.Router();
const validateBody = require('../Utils/validateBody');
const { signup, login, logout } = require('../controllers/authControllers');
const {
  createUserValidationSchema,
  loginValidationSchema,
} = require('../Utils/validation/authValidationSchemas');

router.post('/signup', validateBody(createUserValidationSchema), signup);
router.post('/login', validateBody(loginValidationSchema), login);
router.post('/logout', logout);

module.exports = { authRouter: router };
