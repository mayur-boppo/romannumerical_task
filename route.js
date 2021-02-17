var express = require('express')
const app = express();

var RomanNumeral = require('./romannumeral');
app.use('/romannumeral',RomanNumeral)
module.exports = app