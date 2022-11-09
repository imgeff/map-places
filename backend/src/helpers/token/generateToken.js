require('dotenv/config');

const { sign } = require('jsonwebtoken');

const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };
const SECRET = process.env.SECRET;

function generateToken(payload) {
  const token = sign(payload, SECRET, jwtConfig);
  return token;
}

module.exports = {
  generateToken,
};
