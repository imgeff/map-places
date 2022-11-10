const models = require('../database/models');

async function create(place) {
  const { dataValues: placeCreated } = await models.place.create(place);
  return placeCreated;
}

async function read(userId) {
  const places = await models.place.findAll({ where: { userId }, raw: true });
  return places;
}

async function update(id, place) {
  await models.place.update(place, {
    where: { id },
  });
}

module.exports = {
  create,
  read,
  update,
};
