'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PendingMatches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user1: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Users',
        //   key: 'id'
        // }
      },
      user2: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Users',
        //   key: 'id'
        // }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      uniqueKeys: {
        unique_tag: {
          customIndex: true,
          fields: ['user1', 'user2']
        }
      }
    }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PendingMatches');
  }
};
