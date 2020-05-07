require('dotenv').config()
const {Wit, log} = require('node-wit');

export const witClient = new Wit({
  accessToken: process.env.WIT_AI_TOKEN,
  logger: new log.Logger(log.DEBUG) // optional
});
