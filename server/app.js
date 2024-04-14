const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
const usersRouter = require('./routes/users')
const flightsRouter = require('./routes/flights')
const companiesRouter = require('./routes/companies')
const citiesRouter = require('./routes/cities')
const db = require('./db')
const services = require('./services')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)
app.use('/flights', flightsRouter)
app.use('/cities', citiesRouter)
app.use('/companies', companiesRouter)

app.use(function (err, req, res, next) {
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	res.status(err.status || 500)
	res.json()
})

app.models = {
	users: db.users,
	cities: db.cities,
	flights: db.flights,
	companies: db.companies,
};

app.services = { 
	users: new services.users(app.models),
	cities: new services.cities(app.models),
	flights: new services.flights(app.models),
	companies: new services.companies(app.models),
}

app.use(function (req, res, next) {
	next(createError(404))
})

module.exports = app
