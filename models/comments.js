'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Comments.belongsTo(models.Project, {
        foreignKey: 'userId'
      })
    }
  }
  Comments.init({
    body: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments'
  });
  return Comments;
};