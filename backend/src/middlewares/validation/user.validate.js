require('express-async-errors');

const { ConflictError } = require('../../helpers/error/customError');
const { validateSchema } = require('../../helpers/schema/validateSchema');
const { userExists } = require('../../helpers/validation/userExists');
const { NewUserSchema } = require('../../schemas/user.schema');

async function validateNewUser(req, _res, next) {
  const { name, username, password } = req.body;
  const newUser = { name, username, password };
  validateSchema(NewUserSchema)(newUser);

  if (await userExists({ username })) ConflictError('Username');

  return next();
}

module.exports = {
  validateNewUser,
};
