'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Project, {
        foreignKey:'userId'
      })
      User.hasMany(models.Comments, {
        foreignKey:'userId'
      })
    // Followers and following 
    User.belongsToMany(models.User, {
      as: 'followers',
      through: models.UserFollower,
      foreignKey:'userId'
    })
    User.belongsToMany(models.User, {
      as: 'following',
      through: models.UserFollower,
      foreignKey: 'followerId'
    })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};