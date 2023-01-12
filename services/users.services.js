const models = require('../database/model')
const Users = require('../database/model/users')
const CustomError = require('../utils/CustomError')

const createUser = async(obj) => {
  const transaction = await models.sequelize.transaction()
  try {
    let newUser = await Users.create({

    } , {transaction})

    await transaction.commit()

  } catch (error) {

  }
}