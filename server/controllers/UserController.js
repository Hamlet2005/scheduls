class UserController {
	async getAllUsers(req,res){
		try {
		  const users = await req.app.services.users.getAllUsers()
		  res.status(200).json(users)
		} catch (error) {
			res.json({message: error.message})
		}
	  }
}

module.exports = UserController
