const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
	return sequelize.define("flights", {
		city_from: {
			type: DataTypes.INTEGER,
			references: {
				model: 'cities',
				key: "id"
			}
		},
		city_to: {
			type: DataTypes.INTEGER,
			references: {
				model: 'cities',
				key: "id"
			}
		},
		company: {
			type: DataTypes.INTEGER,
			references: {
				model: 'companies',
				key: "id"
			}
		},
		status: {
			type: DataTypes.STRING(50),
			unique: true,
			allowNull: false
		},
		estimated_time: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		timestemp: false,
		tableName: "flights"
	})
}