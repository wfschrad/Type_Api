'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TypingQuestions', [
      {
        typeAttributeId: 1,
        content: 'tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: "know a lot of people, and see many of them as close friends",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'enjoy background noise, such as the tv or radio, while reading or having a conversation.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'find phone calls welcome interruptions.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'find listening more difficult than speaking.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'prefer generating ideas in a group vs individually.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'prefer to spend special occasions with only a few close friends.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'allow others to state their opinions without interruption, and appreciate the same in return',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'often rehearse things before saying them',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'enjoy recharging with some solo time after being in a group.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'believe talk is cheap.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Sometimes feel taken advantage of by being a better listener than others.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'Tend to talk first, think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
