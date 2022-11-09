const express = require('express');

const cors = require('cors');

const userRoute = require('../routes/user.route');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoute);

module.exports = app;
