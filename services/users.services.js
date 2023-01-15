const UsersControllers = require('../controllers/users.controllers')
const usersController = new UsersControllers()

const getUserByUserName = (req, res) => {
  const userName = req.params.user_name

  usersController.findUsersByUserName(userName)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
}

const postNewUser = (req , res) => {
  const {first_name , last_name , user_name , email , password , phone} = req.body
  usersController.createUser({first_name , last_name , user_name , email , password , phone})
    .then(data => {
      return res.status(201).json({
        User: data.newUser ,
        profile: data.newProfile
      })
    })
    .catch(err => {
      res.status(400).json({
        message: err.message ,
        fields: {
          first_name: 'string' ,
          last_name: 'string' ,
          user_name: 'string' ,
          email: 'string@email.com' ,
          password: 'string' ,
          phone: 9999999999
        }
      })
    })
  
}

module.exports = {
  getUserByUserName ,
  postNewUser
}