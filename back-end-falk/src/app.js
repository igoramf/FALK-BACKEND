const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

//ROUTES
const UserRoutes = require('./routes/userRoutes')
const loginRoutes = require("./routes/loginRoutes")
const postRoutes = require("./routes/postRoutes")

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', loginRoutes);
app.use('/user', UserRoutes);
app.use('/post', )

module.exports = app;