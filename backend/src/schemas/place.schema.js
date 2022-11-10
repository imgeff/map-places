const Joi = require('joi');

const NewPlaceSchema = Joi.object({
  name: Joi.string().min(3).required(),
  userId: Joi.number().integer().min(1).required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  status: Joi.string().min(6).required(),
});

module.exports = {
  NewPlaceSchema,
};
