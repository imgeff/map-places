const models = require('../../database/models');

async function getByKey(key) {
  const user = await models.user.findOne({ where: key, raw: true });
  return user;
}

module.exports = { getByKey };
