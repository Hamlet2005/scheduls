class CompanyController {
	async getAllCompanies(req,res){
		try {
		  const companies = await req.app.services.companies.getAllCompanies()
		  res.status(200).json(companies)
		} catch (error) {
			res.json({message: error.message})
		}
	  }
}

module.exports = CompanyController
