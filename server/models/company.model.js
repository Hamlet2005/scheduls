const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
	return sequelize.define("companies", {
		company_name: {
			type: DataTypes.STRING(50),
			unique: true,
			allowNull: false
		},
		logo: {
			type: DataTypes.STRING(255),
		}
	}, {
		timestemp: false,
		tableName: "companies"
	})
}