const jwt = require("jsonwebtoken");
const config = require("config");
const uuid = require("uuid");
const moment = require("moment");
const didkit = require("../helpers/didkit-handler");
const client = require("../helpers/redis-client");

const generateAccessToken = async (payload) => {
  return jwt.sign(payload, config.get('ACCESS_TOKEN_SECRET'), {expiresIn: '15m'})
}

const storeSession = async () => {
  const randomId = uuid.v4()
  const sessionId = generateAccessToken({id: randomId})
  const dateTime = moment();
  const did = await didkit.getDid(config.get('DEFAULT_JWK'));

  const userData = {
    id: randomId,
    session_id: sessionId,
    date_time: dateTime,
    issuer: did
  }

  await client.rPush(config.get('REDIS_KEY'), JSON.stringify(userData))

  return userData;
}

module.exports = {
  generateAccessToken,
  storeSession
};
