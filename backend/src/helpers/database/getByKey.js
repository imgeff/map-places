const models = require('../../database/models');

async function getByKey(key, model = 'user') {
  const entity = await models[model].findOne({ where: key, raw: true });
  return entity;
}

module.exports = { getByKey };
