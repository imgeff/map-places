require('express-async-errors');
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

async function update(req, res) {
  const { id, name, latitude, longitude, status, payload: { id: userId } } = req.body;
  const place = { name, userId, latitude, longitude, status };

  await placeService.update(id, place);

  return res.status(StatusCodes.OK).json({ message: `Place ${id} successfully updated!` });
}

module.exports = {
  create,
  read,
  update,
};
