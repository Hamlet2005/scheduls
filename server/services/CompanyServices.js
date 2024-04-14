class CompanyServices {
	constructor(models) {
		this.models = models
	}

	async getAllCompanies() {
		const users = await this.models.companies.findAll()
		return users
	}
}

module.exports = CompanyServices
