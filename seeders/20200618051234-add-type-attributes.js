'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TypeAttributes', [
      { name: 'EI_Att', createdAt: new Date(), updatedAt: new Date() },
      { name: 'NS_Att', createdAt: new Date(), updatedAt: new Date() },
      { name: 'FT_Att', createdAt: new Date(), updatedAt: new Date() },
      { name: 'JP_Att', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('TypeAttributes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
