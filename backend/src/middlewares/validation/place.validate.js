require('express-async-errors');

const { ConflictError } = require('../../helpers/error/customError');
const { validateSchema } = require('../../helpers/schema/validateSchema');
const { placeExists } = require('../../helpers/validation/placeExists');
const { NewPlaceSchema } = require('../../schemas/place.schema');

async function validateNewPlace(req, _res, next) {
  const { name, latitude, longitude, status, payload: { id: userId } } = req.body;
  const newPlace = { name, userId, latitude, longitude, status };

  validateSchema(NewPlaceSchema)(newPlace);

  const placeAlreadyExists = await placeExists({ latitude, longitude });
  if (placeAlreadyExists) ConflictError('', 'There is already a place with the same coordinates');

  return next();
}

module.exports = {
  validateNewPlace,
};
