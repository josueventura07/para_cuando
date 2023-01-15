'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Profiles , {as:'user' , foreignKey:'user_id'})
    }
  }
  Users.init({
    firstName: DataTypes.STRING ,
    lastName: DataTypes.STRING ,
    userName: DataTypes.STRING ,
    email: DataTypes.STRING , 
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users' ,
    timestamps: false ,
    // scopes: {
    //   no_timestamps: {
    //     attributes: {
    //       exclude: ['created_at' , 'updated_at']
    //     }
    //   }
    // }
  })
  return Users
}