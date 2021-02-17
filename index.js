const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./route.js');
const app = express();
const PORT = process.env.PORT || 8001

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
app.listen(PORT, () => console.log(`Example app id listening on port ${PORT}!`));