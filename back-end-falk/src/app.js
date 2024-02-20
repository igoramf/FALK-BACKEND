const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

//ROUTES
const UserRoutes = require('./routes/userRoutes')
const loginRoutes = require("./routes/loginRoutes")
const postRoutes = require("./routes/postRoutes")
const commentRoutes = require("./routes/commentRoutes")
const communityRoutes = require("./routes/communityRoutes")

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', loginRoutes);
app.use('/user', UserRoutes);
app.use('/post', postRoutes);
app.use("/comment", commentRoutes);
app.use("/community", communityRoutes)

module.exports = app;