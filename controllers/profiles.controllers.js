const models = require('../database/model')
const uuid = require('uuid')

const createProfile = async(obj , userId , roleId , countryId) => {
  const transaction = await models.sequelize.transaction()

  try {
    const newProfile = await models.Profiles.create({
      id: uuid.v4() ,
      userId ,
      roleId ,
      imageUrl: obj.imageUrl ,
      codePhone: obj.codePhone ,
      phone: obj.phone ,
      countryId
    } , {transaction})

    await transaction.commit()
    return newProfile
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

module.exports = {
  createProfile
}