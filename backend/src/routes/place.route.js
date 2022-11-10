const { Router } = require('express');
const {
  validateNewPlace,
  validateUpdatePlace,
} = require('../middlewares/validation/place.validate');
const placeController = require('../controllers/place.controller');
const { auth } = require('../middlewares/auth');

const route = Router();

route.post('/create', auth, validateNewPlace, placeController.create);

route.get('/all', auth, placeController.read);

route.put('/update', auth, validateUpdatePlace, placeController.update);

module.exports = route;
