'use strict'
const uuid = require('uuid')
const {Op} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const usersSeeds = []

    for (let i=1; i<21 ; i++) {
      const newSeed = {
        id: uuid.v4() ,
        first_name: `${i} name` ,
        last_name: 'example' ,
        email: `${i}@example.com` ,
        user_name: `${i}Example` ,
        password: `${i}Example`
      }
      usersSeeds.push(newSeed)
    }

    try {
      await queryInterface.bulkInsert('users' , usersSeeds , {transaction})

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const userNames = [] 

    for (let i=1; i<21 ; i++) {
      const user_name = `${i}Example` 
      userNames.push(user_name)
    }
    try {
      await queryInterface.bulkDelete('users' , {
        user_name: {
          [Op.or]: userNames
        }
      })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}
