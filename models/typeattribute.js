'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeAttribute = sequelize.define('TypeAttribute', {
    name: DataTypes.STRING
  }, {});
  TypeAttribute.associate = function (models) {
    TypeAttribute.hasMany(models.TypingQuestion, { foreignKey: 'typeAttributeId' })
    // associations can be defined here
  };
  return TypeAttribute;
};