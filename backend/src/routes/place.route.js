const { Router } = require('express');
const { validateNewPlace } = require('../middlewares/validation/place.validate');
const placeController = require('../controllers/place.controller');

const route = Router();

route.post('/create', validateNewPlace, placeController.create);

module.exports = route;
