'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('users', [{
      name: 'test user',
      email: 'test@test.com',
      mobile: '9793813806',
      admin: true,
      password: bcrypt.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('users', null, {});
  }
};
