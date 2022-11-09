const schemaErrors = require('./schemaErrors');

const validateSchema = (schema) => (data) => {
  const { error: schemaFailed } = schema.validate(data);

  if (schemaFailed) {
    const errorDetails = schemaFailed.details[0];
    const error = new Error(errorDetails.message);

    const nameError = schemaErrors.find((err) => err.types.includes(errorDetails.type)).name;
    error.name = nameError;
    throw error;
  }
};

module.exports = {
  validateSchema,
};
