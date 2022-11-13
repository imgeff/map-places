'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('places', [
      {
        userId: 1,
        name: 'Estádio Edvaldo Flores',
        latitude: -14.853157954316,
        longitude: -40.83060401130258,
        status: 'Fechado',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('places', null, {});
  }
};
