'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'password', 'passwordDigest')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'passwordDigest', 'password')
  }
};

