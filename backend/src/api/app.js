const express = require('express');

const cors = require('cors');

const userRoute = require('../routes/user.route');
const placeRoute = require('../routes/place.route');

const { errorManager } = require('../middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoute);

app.use('/place', placeRoute);

app.use(errorManager);

module.exports = app;
