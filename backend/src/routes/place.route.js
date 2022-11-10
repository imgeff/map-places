const { Router } = require('express');
const { validateNewPlace } = require('../middlewares/validation/place.validate');
const placeController = require('../controllers/place.controller');
const { authenticate } = require('../middlewares/auth');

const route = Router();

route.post('/create', authenticate, validateNewPlace, placeController.create);

module.exports = route;
