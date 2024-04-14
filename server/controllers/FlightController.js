class FlightController {
	async getAllFlights(req,res){
		try {
		  const flights = await req.app.services.flights.getAllFlights()
		  res.status(200).json(flights)
		} catch (error) {
			res.json({message: error.message})
		}
	  }
}

module.exports = FlightController
