require('dotenv').config()
require('module-alias/register');
const app = require('@app');
const config = require('@config');
const databaseConfig = require('./database/database');

async function startServer() {
  await databaseConfig();
  app.listen(config.app.port, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Server on: port ${config.app.port}`);
  });
}

startServer();