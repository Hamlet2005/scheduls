class CityServices {
	constructor(models) {
		this.models = models
	}

	async getAllCities() {
		const users = await this.models.cities.findAll()
		return users
	}
}

module.exports = CityServices
