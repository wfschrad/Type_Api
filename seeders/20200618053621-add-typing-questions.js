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
        content: 'sometimes feel taken advantage of by being a better listener than others.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "would rather 'do' something than 'think' about it.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "like specific answers to questions, you prefer 'three fifty-two' vs 'almost 4.'",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "believe if it ain't broke, don't fix it.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "get frustated when people don't give clear instructions.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'prefer to receive information sequentially instead of in a random order.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'would rather work with facts and figures than ideas and theories.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'are often accused of being absent-minded.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'tend to think about lots of things at once.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'find details boring.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'tend to give general answers to most questions, and get annoyed when pushed for specifics.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "am usually more excited about where I'm going vs where I've been.",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'am prone to puns and word games',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'often can stay cool and calm when others are upset.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: "believe disputes should be resolved based on what's fair instead of what will make everyone happy.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'would rather tell others when I disagree instead of letting them think they are right.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'pride myself on my objectivity',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'enjoy arguing both sides of an argument for the sake of intellectual exploration.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'prefer being right over being liked',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'often asks how a decision will affect others.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: "believe a 'good' decision takes other people's feelings into account.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'will often sacrifice your own happiness for benefit of others.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'prefer harmony over clarity',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'are frequently accused of taking things too seriously.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: "won't hesistate to take something back if I perceive it has hurt somebody's feelings.",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'am easily distracted; I can easily get lost before the front door and the car.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "love to explore the unknown.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'hate planning and would rather just get started and see what the task demands.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'usually depend on last minute bursts of energy to meet deadlines',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'believe creativity and responsiveness trump order and neatness.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'are often accused of being disorganized',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "don't like surprises, and make this well known",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "keep lists and use them",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'thrive on order, often keeping systems for things like my refrigerator or closet.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'have a place for everything',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'seem to always be waiting for others, who are almost never on time.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "like to work things through to completion, even if I know I'll have to do it again to get it right.",
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
