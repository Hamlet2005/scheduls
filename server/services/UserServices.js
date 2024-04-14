class UserServices {
	constructor(models) {
		this.models = models
	}

	async getAllUsers() {
		console.log(this.models.users);
		const users = await this.models.users.findAll()
		return users
	}
}

module.exports = UserServices
