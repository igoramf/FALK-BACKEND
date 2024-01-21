const config = {
    app : {
      port : process.env.PORT,
    },
    db : {
      production : process.env.DB_URL_PROD,
      develop: process.env.DB_URL_DEV
    }
};

module.exports = config;