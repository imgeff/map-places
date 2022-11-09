const { getByKey } = require('../database/getByKey');

async function userExists(userKey) {
  const user = await getByKey(userKey);
  if (user !== null) return true;
  return false;
}

module.exports = { userExists };
