'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypingQuestion = sequelize.define('TypingQuestion', {
    typeAttributeId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    scoringScalar: DataTypes.INTEGER
  }, {});
  TypingQuestion.associate = function (models) {
    TypingQuestion.belongsTo(models.TypeAttribute, { foreignKey: 'typeAttributeId' });
    // associations can be defined here
  };
  return TypingQuestion;
};