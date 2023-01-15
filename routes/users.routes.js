const router = require('express').Router()
const usersServices = require('../services/users.services')

router.post('/' , usersServices.postNewUser)

router.get('/:user_name' , usersServices.getUserByUserName)

module.exports = router