'use strict';

// const { sequelize } = require("../models");
// const { DataTypes } = require("sequelize/types");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedDenials = [];
    seedDenials.push(4);
    seedDenials.push(6);

    const seedMatches = [];
    seedMatches.push(3);

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'b',
        email: 'b@gmail.com',
        auth0Id: 'b_auth',
        profilePhoto: 'photoString',
        pTypeId: 1,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        denials: seedDenials,
        currentMatches: seedMatches,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'c',
        email: 'ac@gmail.com',
        auth0Id: 'c_auth',
        profilePhoto: 'photoString',
        pTypeId: 2,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'd',
        email: 'd@gmail.com',
        auth0Id: 'd_auth',
        profilePhoto: 'photoString',
        pTypeId: 3,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'e',
        email: 'e@gmail.com',
        auth0Id: 'e_auth',
        profilePhoto: 'photoString',
        pTypeId: 4,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'f',
        email: 'f@gmail.com',
        auth0Id: 'f_auth',
        profilePhoto: 'photoString',
        pTypeId: 5,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'g',
        email: 'g@gmail.com',
        auth0Id: 'g_auth',
        profilePhoto: 'photoString',
        pTypeId: 6,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'h',
        email: 'h@gmail.com',
        auth0Id: 'h_auth',
        profilePhoto: 'photoString',
        pTypeId: 7,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'i',
        email: 'i@gmail.com',
        auth0Id: 'i_auth',
        profilePhoto: 'photoString',
        pTypeId: 8,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'j',
        email: 'j@gmail.com',
        auth0Id: 'j_auth',
        profilePhoto: 'photoString',
        pTypeId: 9,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'k',
        email: 'k@gmail.com',
        auth0Id: 'k_auth',
        profilePhoto: 'photoString',
        pTypeId: 10,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'l',
        email: 'l@gmail.com',
        auth0Id: 'l_auth',
        profilePhoto: 'photoString',
        pTypeId: 11,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'm',
        email: 'm@gmail.com',
        auth0Id: 'm_auth',
        profilePhoto: 'photoString',
        pTypeId: 12,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'n',
        email: 'n@gmail.com',
        auth0Id: 'n_auth',
        profilePhoto: 'photoString',
        pTypeId: 13,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'o',
        email: 'o@gmail.com',
        auth0Id: 'o_auth',
        profilePhoto: 'photoString',
        pTypeId: 14,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'p',
        email: 'p@gmail.com',
        auth0Id: 'p_auth',
        profilePhoto: 'photoString',
        pTypeId: 15,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'q',
        email: 'q@gmail.com',
        auth0Id: 'q_auth',
        profilePhoto: 'photoString',
        pTypeId: 16,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'r',
        email: 'r@gmail.com',
        auth0Id: 'r_auth',
        profilePhoto: 'photoString',
        pTypeId: 1,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 's',
        email: 's@gmail.com',
        auth0Id: 's_auth',
        profilePhoto: 'photoString',
        pTypeId: 2,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 't',
        email: 't@gmail.com',
        auth0Id: 't_auth',
        profilePhoto: 'photoString',
        pTypeId: 3,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'u',
        email: 'u@gmail.com',
        auth0Id: 'u_auth',
        profilePhoto: 'photoString',
        pTypeId: 4,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'v',
        email: 'v@gmail.com',
        auth0Id: 'v_auth',
        profilePhoto: 'photoString',
        pTypeId: 5,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'w',
        email: 'w@gmail.com',
        auth0Id: 'w_auth',
        profilePhoto: 'photoString',
        pTypeId: 6,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'x',
        email: 'x@gmail.com',
        auth0Id: 'x_auth',
        profilePhoto: 'photoString',
        pTypeId: 7,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'y',
        email: 'y@gmail.com',
        auth0Id: 'y_auth',
        profilePhoto: 'photoString',
        pTypeId: 8,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'z',
        email: 'z@gmail.com',
        auth0Id: 'z_auth',
        profilePhoto: 'photoString',
        pTypeId: 9,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Aa',
        email: 'aa@gmail.com',
        auth0Id: 'aa_auth',
        profilePhoto: 'photoString',
        pTypeId: 10,
        rawEI: 4,
        rawNS: 4,
        rawFT: 4,
        rawJP: 4,
        isMatchable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
