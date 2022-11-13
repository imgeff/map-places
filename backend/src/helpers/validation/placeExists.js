const { getByKey } = require('../database/getByKey');

async function placeExists(placeKey) {
  const place = await getByKey(placeKey, 'place');
  if (place !== null) return true;
  return false;
}

module.exports = { placeExists };
