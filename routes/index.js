const express = require('express');
const { Pong } = require('../controllers');

const serverRoute = express.Router();

serverRoute.route('/ping').get(Pong)

module.exports = serverRoute