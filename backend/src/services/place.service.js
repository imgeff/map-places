const models = require('../database/models');

async function create(place) {
  const { dataValues: placeCreated } = await models.place.create(place);
  return placeCreated;
}

module.exports = {
  create,
};
