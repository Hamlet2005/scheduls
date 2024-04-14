const express = require('express')
const router = express.Router()

const CompanyController = require('../controllers/CompanyController');
const Controllers = new CompanyController()

router.get('/', Controllers.getAllCompanies)

module.exports = router