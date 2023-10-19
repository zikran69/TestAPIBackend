const crypt = require('bcrypt');
const prisma = require('../db');

const ValidateLogin = async (req, res, next) => {
	try {
		const {emailUser, passwordUser} = req.body
		if (!emailUser || !passwordUser) {
			return res.status(400).send({
				message: 'email and password is required'
			})
		}

		const getUser = await prisma.user.findFirst({where: {emailUser: emailUser}})
		if (!emailUser) {
			return res.status(404).send({
				message: 'user not found'
			})
		}

		const isValidPassword = crypt.compareSync(passwordUser, getUser.passwordUser)
		if (!isValidPassword) {
			return res.status(400).send({
				message: 'invalid password'
			})
		}

		req.userData = getUser.dataValues
		next()
	} catch (error) {
		console.log(error)
		return res.status(404).send('Email not found')
	}
}

module.exports = {ValidateLogin}