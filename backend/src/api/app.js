const express = require('express');

const cors = require('cors');

const { errorManager } = require('../middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());

app.use(errorManager);

module.exports = app;
