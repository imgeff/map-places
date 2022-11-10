const { StatusCodes } = require('http-status-codes');
const placeService = require('../services/place.service');

async function create(req, res) {
  const { name, userId, latitude, longitude, status } = req.body;
  const place = { name, userId, latitude, longitude, status };

  const placeCreated = await placeService.create(place);

  return res.status(StatusCodes.CREATED).json(placeCreated);
}

module.exports = {
  create,
};
