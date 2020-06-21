'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PTypes', [
      { name: 'enfj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'enfp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'entj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'entp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'esfj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'esfp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'estj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'estp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'infj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'infp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'intj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'intp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'isfj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'isfp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'istj', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
      { name: 'istp', description: 'Profile Type Description Goes Here', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TypingQuestions', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
