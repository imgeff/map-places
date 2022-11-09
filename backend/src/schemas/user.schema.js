const Joi = require('joi');

const NewUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(1).required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  NewUserSchema,
};
