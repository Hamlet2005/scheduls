const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
	return sequelize.define("users", {
		username: {
			type: DataTypes.STRING(50),
			unique: false,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(50),
			unique: true,
			allowNull: false
		}
	}, {
		timestemp: false,
		tableName: "users"
	})
}