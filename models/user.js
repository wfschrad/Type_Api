'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    //userAuth fields, set upon initial creation
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    auth0Id: DataTypes.STRING,
    profilePhoto: DataTypes.STRING,
    //onboarding fields, set upon submission of TypingForm
    uploadedPhoto: DataTypes.STRING,
    preferredName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    bio: DataTypes.TEXT,
    pTypeId: DataTypes.INTEGER,
    rawEI: DataTypes.INTEGER,
    rawNS: DataTypes.INTEGER,
    rawFT: DataTypes.INTEGER,
    rawJP: DataTypes.INTEGER,
    isMatchable: DataTypes.BOOLEAN
  }, {});
  User.associate = function (models) {
    User.belongsTo(models.PType, { foreignKey: 'pTypeId' });
    User.belongsToMany(models.User, {
      through: 'Matches',
      as: 'matches',
      foreignKey: 'userId1'
    });
    User.belongsToMany(models.User, {
      through: 'Matches',
      as: 'matchedWith',
      foreignKey: 'userId2'
    });
    User.belongsToMany(models.User, {
      through: 'Denials',
      as: 'denials',
      foreignKey: 'userId1'
    });
    User.belongsToMany(models.User, {
      through: 'Denials',
      as: 'deniedBy',
      foreignKey: 'userId2'
    });
    User.belongsToMany(models.User, {
      through: 'PendingMatches',
      as: 'pendingMatches',
      foreignKey: 'userId1'
    });
    User.belongsToMany(models.User, {
      through: 'PendingMatches',
      as: 'potentialMatches',
      foreignKey: 'userId2'
    });
  };
  return User;
};
