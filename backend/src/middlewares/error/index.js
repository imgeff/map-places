const errors = require('./errors');

function errorManager(err, _req, res, _next) {
  const { name, message } = err;

  const typeError = errors.find((error) => error.types.includes(name));

  if (typeError !== undefined) {
    return res.status(typeError.code).json({ message });
  }

  console.error(err);
  return res.sendStatus(500);
}

module.exports = { errorManager };
