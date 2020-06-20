'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TypingQuestions', [
      {
        typeAttributeId: 1,
        content: 'I tend to talk first, and think second.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: "I know a lot of people, and see many of them as close friends",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I enjoy background noise, such as the tv or radio, while reading or having a conversation.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: "I find phone calls welcome interruptions from the day's tasks.",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I find listening more difficult than speaking.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I prefer generating ideas in a group as opposed to individually.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I prefer to spend special occasions with only a few close friends.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I allow others to state their opinions without interruption, and expect the same in return',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I often rehearse things before saying them',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I enjoy recharging with solo time after being in a group.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I believe talk is cheap.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 1,
        content: 'I sometimes feel taken advantage of by being a better listener than others.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "I would rather 'do' something than 'think' about it.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "I prefer specific answers to questions. If I ask the time, I would rather the answer be 'three fifty-two' vs 'almost 4.'",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "I believe in the motto 'if it ain\'t broke, don't fix it.'",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "I get frustated when people don't give clear instructions.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I prefer to receive information sequentially instead of in a random order.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I would rather work with facts and figures than ideas and theories.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I am often accused of being absent-minded.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I tend to think about lots of things at once.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I find details boring.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I tend to give general answers to most questions, and get annoyed when pushed for specifics.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: "I am usually more excited about where I'm going vs where I've been.",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 2,
        content: 'I am prone to puns and word games',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I can often stay cool and calm when others are upset.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: "I believe disputes should be resolved based on what's fair instead of what will make everyone happy.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I would rather tell others when I disagree instead of letting them think they are right.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I pride myself on my objectivity',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I often enjoy arguing both sides of an argument for the sake of intellectual exploration.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I would rather be right than be liked',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I often ask how a decision will affect others.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: "I believe a 'good' decision takes other people's feelings into account.",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I will often sacrifice my own happiness for the benefit of others.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I prefer harmony over clarity',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: 'I am frequently accused of taking things too seriously.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 3,
        content: "I won't hesistate to take something back if I perceive it has hurt somebody's feelings.",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I am easily distracted; I can easily get lost before the front door and the car.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "I love to explore the unknown.",
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I hate planning and would rather just get started and see what the task demands.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I usually depend on last minute bursts of energy to meet deadlines',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I believe creativity and responsiveness trump order and neatness.',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I am often accused of being disorganized',
        scoringScalar: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "I don't like surprises, and make this well known",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "I keep lists and actually use them",
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I thrive on order, often keeping systems for things like my refrigerator or closet.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I have a place for everything',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: 'I seem to always be waiting for others, who are almost never on time.',
        scoringScalar: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        typeAttributeId: 4,
        content: "I like to work things through to completion, even if I know I'll have to do it again to get it right.",
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
