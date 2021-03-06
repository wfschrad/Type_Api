'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      auth0Id: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      profilePhoto: {
        type: Sequelize.STRING
      },
      uploadedPhoto: {
        type: Sequelize.STRING
      },
      preferredName: {
        type:Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type:Sequelize.STRING
      },
      bio: {
        type:Sequelize.STRING
      },
      pTypeId: {
        type: Sequelize.INTEGER
      },
      currentMatches: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      pendingMatches: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      prospects: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      denials: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      rawEI: {
        type: Sequelize.INTEGER
      },
      rawNS: {
        type: Sequelize.INTEGER
      },
      rawFT: {
        type: Sequelize.INTEGER
      },
      rawJP: {
        type: Sequelize.INTEGER
      },
      isMatchable: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
