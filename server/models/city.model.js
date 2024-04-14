const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
	return sequelize.define("cities", {
		name: {
			type: DataTypes.STRING(50),
			unique: true,
			allowNull: false
		},
		code: {
			type: DataTypes.STRING(50),
			unique: true,
			allowNull: false
		}
	}, {
		timestemp: false,
		tableName: "cities"
	})
}