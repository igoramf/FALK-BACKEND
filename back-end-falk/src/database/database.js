const mongoose = require('mongoose');
const config = require('@config');

module.exports = async () =>  {
    let DB_URL;
    if (process.env.NODE_ENV === "prod") {
        console.log('Conectando com banco de produção...')
        DB_URL = config.db.production;
    } else if (process.env.NODE_ENV === "dev") {
        console.log('Conectando com banco de desenvolvimento...')
        DB_URL = config.db.develop;
    }
    
    mongoose.connection.on('connected', () => {
        console.log('Conectado com o banco de dados!');
    })

    mongoose.connection.on('error', (err) => {
        console.log("Erro na conexão com o banco de dados: " + err);
    });

    mongoose.connect(DB_URL, {
        serverSelectionTimeoutMS: 30000
    });
}