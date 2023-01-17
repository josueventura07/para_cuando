const router = require('express').Router()
const { roleMiddleware } = require('../middlewares/role.middleware')
const {validateJWT} = require('../middlewares/validate.middleware')
const usersServices = require('../services/users.services')

router.route('/')
  .post(usersServices.postNewUser)
  .get(validateJWT ,roleMiddleware, usersServices.getAllUsers)

router.get('/user-info' , usersServices.getOwnProfile) // Middleware pending

router.route('/:user_id')
  .get(usersServices.getUserById)
  .put(usersServices.putUser) // Middleware pending
// router.get('/:user_name' , usersServices.getUserByUserName)

router.get('/:user_id/votes') // Waiting for Josue

router.get('/:user_id/publications') // Waiting for Josue

module.exports = router