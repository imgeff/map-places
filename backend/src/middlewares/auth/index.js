const { StatusCodes } = require('http-status-codes');
const { verifyToken } = require('../../helpers/token');

async function auth(req, res, next) {
  const { authorization: token } = req.headers;
  if (!token) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Token is required!' });

  const payload = verifyToken(token);
  req.body.payload = payload;
  next();
}

module.exports = {
  auth,
};
