const { hashSync } = require('bcryptjs');
const models = require('../database/models');

async function register(user) {
  user.password = hashSync(user.password);
  const { dataValues: { id, name, username } } = await models.user.create(user);
  const createdUser = { id, name, username };
  return createdUser;
}

module.exports = {
  register,
};
