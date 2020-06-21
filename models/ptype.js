'use strict';
module.exports = (sequelize, DataTypes) => {
  const PType = sequelize.define('PType', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  PType.associate = function (models) {
    // associations can be defined here
    PType.hasMany(models.User, { foreignKey: 'pTypeId' });
  };
  return PType;
};