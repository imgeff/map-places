'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        username: 'John',
        password: '$2a$12$sI8fSaQTH4bn/rKQi0vFT.5KSeTS49PTObgYeg.rciMbHq2qNxjqa',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
