'use strict'
// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          type: Sequelize.UUID
        },
        firstName: {
          type: Sequelize.STRING ,
          allowNull: false ,
          field: 'first_name' ,
          validate: {
            min: 3 
          }
        },
        lastName: {
          type: Sequelize.STRING ,
          allowNull: false ,
          field: 'last_name' ,
          validate: {
            min: 3
          }
        } ,
        email: {
          type: Sequelize.STRING ,
          allowNull: false ,
          unique: true ,
          validate: {
            isEmail: true
          }
        } ,
        userName: {
          type: Sequelize.STRING ,
          allowNull: false ,
          unique: true ,
          validate: {
            min: 3
          }
        } ,
        password: {
          type: Sequelize.STRING ,
          allowNull: false ,
          validate: {
            min: 6
          }
        } ,
        emailVerified: {
          type: Sequelize.DATE
        } ,
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      } , {transaction})

      await transaction.commit()

    } catch (error) {
      await transaction.rollback()
      throw error
    }
  } ,
  down: async (queryInterface , Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('users' , {transaction})
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}