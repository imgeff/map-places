const models = require('../database/models');

async function create(place) {
  const { dataValues: placeCreated } = await models.place.create(place);
  return placeCreated;
}

async function read(userId) {
  const places = await models.place.findAll({ where: { userId }, raw: true });
  return places;
}

module.exports = {
  create,
  read,
};
