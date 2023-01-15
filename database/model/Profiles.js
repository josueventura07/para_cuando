'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profiles.belongsTo(models.Users , {as: 'profile' , foreignKey: 'user_id'})
      Profiles.belongsTo(models.Roles , {as: 'profile' , foreignKey: 'role_id'})
    }
  }
  Profiles.init({
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Profiles',
    tableName: 'profiles' , 
    timestamps: true ,
    scopes: {
      no_timestamps: {
        attributes: {
          exclude: ['created_at' , 'updated_at']
        }
      }
    }
  })
  return Profiles
}