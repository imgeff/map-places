require('dotenv/config');

const { sign, verify } = require('jsonwebtoken');

const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };
const SECRET = process.env.SECRET;

function generateToken(payload) {
  const token = sign(payload, SECRET, jwtConfig);
  return token;
}

function verifyToken(token) {
  const payload = verify(token, SECRET, jwtConfig);
  return payload;
}

module.exports = {
  generateToken,
  verifyToken,
};
