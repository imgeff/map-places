require('express-async-errors');

const { ConflictError, NotFoundError } = require('../../helpers/error/customError');
const { validateSchema } = require('../../helpers/schema/validateSchema');
const { placeExists } = require('../../helpers/validation/placeExists');
const { NewPlaceSchema, UpdatePlaceSchema } = require('../../schemas/place.schema');

async function validateNewPlace(req, _res, next) {
  const { name, latitude, longitude, status, payload: { id: userId } } = req.body;
  const newPlace = { name, userId, latitude, longitude, status };

  validateSchema(NewPlaceSchema)(newPlace);

  const placeAlreadyExists = await placeExists({ latitude, longitude });
  if (placeAlreadyExists) ConflictError('', 'There is already a place with the same coordinates');

  return next();
}

async function validateUpdatePlace(req, _res, next) {
  const { id, name, latitude, longitude, status, payload: { id: userId } } = req.body;
  const placeUpdated = { id, name, userId, latitude, longitude, status };

  validateSchema(UpdatePlaceSchema)(placeUpdated);

  const placeAlreadyExists = await placeExists({ id });
  if (!placeAlreadyExists) NotFoundError('Place');

  return next();
}

module.exports = {
  validateNewPlace,
  validateUpdatePlace,
};
