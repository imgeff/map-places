require('express-async-errors');

const { ConflictError } = require('../../helpers/error/customError');
const { validateSchema } = require('../../helpers/schema/validateSchema');
const { userExists } = require('../../helpers/validation/userExists');
const { NewUserSchema, UserLoginSchema } = require('../../schemas/user.schema');

async function validateNewUser(req, _res, next) {
  const { name, username, password } = req.body;
  const newUser = { name, username, password };
  validateSchema(NewUserSchema)(newUser);

  if (await userExists({ username })) ConflictError('Username');

  return next();
}

async function validateUserLogin(req, _res, next) {
  const { username, password } = req.body;
  const userLogin = { username, password };
  validateSchema(UserLoginSchema)(userLogin);

  return next();
}

module.exports = {
  validateNewUser,
  validateUserLogin,
};
