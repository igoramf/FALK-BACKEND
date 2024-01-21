const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', (req, res) => res.send("teste"));

module.exports = app;