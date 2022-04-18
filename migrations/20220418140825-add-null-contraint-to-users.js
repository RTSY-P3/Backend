'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'passwordDigest', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'passwordDigest', {
      type: Sequelize.STRING,
      allowNull: false
  })
}
}
