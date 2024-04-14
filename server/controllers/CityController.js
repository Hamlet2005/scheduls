class CityController {
	async getAllCities(req,res){
		try {
		  const cities = await req.app.services.cities.getAllCities()
		  res.status(200).json(cities)
		} catch (error) {
			res.json({message: error.message})
		}
	  }
}

module.exports = CityController
