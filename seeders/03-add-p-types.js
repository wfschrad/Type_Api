'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const enfjDescription = `
      Great communicator.Imaginative.Organized.Natural leader.
    `;

    const enfpDescription = `
      Dynamic.Enthusiastic.Social.Gregarious.
    `;

    const entjDescription = `
      Natural leader.Energetic.Driven.Excellent communicator.
    `;

    const entpDescription = `
      Inventive.Enthusiastic.Prone to excitement.Risk-taker.
    `;

    const esfjDescription = `
    Gracious.Harmonious.Caring.Organized.
  `;

    const esfpDescription = `
  Focused on the present.Accepting.Peace-maker.Personable.
`;

    const estjDescription = `
Structured.Grounded.Capable.Personable.
`;

    const estpDescription = `
Realist.Flexible.Fearless.Gregarious.
`;
    const infjDescription = `
Inspring.Idealist.Creative.Humanitarian.
`;

    const infpDescription = `
Idealist.Philanthropic.Reflective.Unpredictable.
`;

    const intjDescription = `
Independent.Organized.Thoughtful.Analytical
`;

    const intpDescription = `
Philosophical.Intellectual.Eccentric.Broad range of interests.
`;

    const isfjDescription = `
Reliable.Strong commitment to serve.Gentle.Caring
`;

    const isfpDescription = `
Sensitive.Harmonious.Creative.Unconventional`
      ;

    const istjDescription = `
Strong sense of responsibility.Pragmatic.Driven.Loyal.
`;

    const istpDescription = `
Adventurous.Spontaneous.Competitive.Observant.
`;

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
    return queryInterface.bulkDelete('PTypes', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
