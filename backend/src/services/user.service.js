const { hashSync, compareSync } = require('bcryptjs');
const models = require('../database/models');
const { getByKey } = require('../helpers/database/getByKey');
const { NotFoundError, NotAuthorizedError } = require('../helpers/error/customError');

async function register(user) {
  user.password = hashSync(user.password);

  const { dataValues: { id, name, username } } = await models.user.create(user);
  const createdUser = { id, name, username };

  return createdUser;
}

async function login({ username, password }) {
  const userDB = await getByKey({ username });

  if (userDB === null) NotFoundError('User');

  const passwordIsCorrect = compareSync(password, userDB.password);
  if (passwordIsCorrect) {
    const { id, name } = userDB;
    return { id, name, username };
  }

  NotAuthorizedError('User');
}

module.exports = {
  register,
  login,
};
