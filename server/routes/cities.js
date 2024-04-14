const express = require('express')
const router = express.Router()

const CityController = require('../controllers/CityController');
const Controllers = new CityController()

router.get('/', Controllers.getAllCities)

module.exports = router