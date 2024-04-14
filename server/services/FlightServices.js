class FlightServices {
	constructor(models) {
		this.models = models
	}

	async getAllFlights() {
		const users = await this.models.flights.findAll()
		return users
	}
}

module.exports = FlightServices
