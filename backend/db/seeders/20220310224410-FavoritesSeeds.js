'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Favorites', [
      {
        spotId: 9,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        spotId: 10,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        spotId: 4,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Favorites', null, {});
  }
};
