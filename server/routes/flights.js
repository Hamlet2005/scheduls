const express = require('express')
const router = express.Router()

const FlightController = require('../controllers/FlightController');
const Controllers = new FlightController()

router.get('/', Controllers.getAllFlights)

module.exports = router