const { StatusCodes } = require('http-status-codes');
const placeService = require('../services/place.service');

async function create(req, res) {
  const { name, latitude, longitude, status, payload: { id: userId } } = req.body;
  const place = { name, userId, latitude, longitude, status };

  const placeCreated = await placeService.create(place);

  return res.status(StatusCodes.CREATED).json(placeCreated);
}

async function read(req, res) {
  const { payload: { id: userId } } = req.body;

  const places = await placeService.read(userId);

  return res.status(StatusCodes.OK).json(places);
}

module.exports = {
  create,
  read,
};
