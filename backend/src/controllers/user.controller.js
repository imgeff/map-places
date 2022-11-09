require('express-async-errors');
const { StatusCodes } = require('http-status-codes');
const { generateToken } = require('../helpers/token/generateToken');
const userService = require('../services/user.service');

async function register(req, res) {
  const { name, username, password } = req.body;

  const user = { name, username, password };
  const createdUser = await userService.register(user);

  const token = generateToken(createdUser);

  return res.status(StatusCodes.CREATED).json({ ...createdUser, token });
}

async function login(req, res) {
  const { username, password } = req.body;

  const user = { username, password };
  const userDB = await userService.login(user);

  const token = generateToken(userDB);

  return res.status(StatusCodes.OK).json({ ...userDB, token });
}

module.exports = {
  register,
  login,
};
