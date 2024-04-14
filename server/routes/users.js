const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController');
const Controllers = new UserController()

router.get('/', Controllers.getAllUsers)

module.exports = router
