const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.SERVER_NAME_DB, 'root', '', {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
    logging: false,
    define: {
        timestamps: false
    }
})

function start() {
    try {
        sequelize.authenticate(),
        console.log("db connect success");
    } catch(error) {
        console.log("db connect error");
    }
}

start()

const cities = require("../models/city.model")(sequelize)
const companies = require("../models/company.model")(sequelize)
const flights = require("../models/flights.model")(sequelize)
const users = require("../models/user.model")(sequelize)

module.exports = {
    sequelize,
    cities,
    companies,
    flights,
    users,
}