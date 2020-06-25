'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    user1: DataTypes.INTEGER,
    user2: DataTypes.INTEGER
  }, {});
  Match.associate = function(models) {
    // associations can be defined here

  };
  return Match;
};
