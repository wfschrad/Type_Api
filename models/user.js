'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    profilePhoto: DataTypes.STRING,
    pTypeId: DataTypes.INTEGER,
    currentMatches: DataTypes.ARRAY(DataTypes.INTEGER),
    pendingMatches: DataTypes.ARRAY(DataTypes.INTEGER),
    prospects: DataTypes.ARRAY(DataTypes.INTEGER),
    denials: DataTypes.ARRAY(DataTypes.INTEGER),
    rawEI: DataTypes.INTEGER,
    rawNS: DataTypes.INTEGER,
    rawFT: DataTypes.INTEGER,
    rawJP: DataTypes.INTEGER,
    isMatchable: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};