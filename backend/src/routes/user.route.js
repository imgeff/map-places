const { Router } = require('express');
const { validateNewUser, validateUserLogin } = require('../middlewares/validation/user.validate');
const userController = require('../controllers/user.controller');

const route = Router();

route.post('/register', validateNewUser, userController.register);

route.post('/login', validateUserLogin, userController.login);

module.exports = route;
