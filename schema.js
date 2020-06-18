const { TypingQuestion } = require('./models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');
const { resolveFieldValueOrError } = require('graphql/execution/execute');

// TypingQuestion Type

const TypingQuestionType = new GraphQLObjectType({
    name: 'TypingQuestion',
    fields: () => ({
        typeAttributeId: { type: GraphQLInt },
        content: { type: GraphQLString },
        scoringScalar: { type: GraphQLInt }
    })
});

// Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        typingQuestions: {
            type: new GraphQLList(TypingQuestionType),
            async resolve(parent, args) {
                console.log('begin resolver')
                const questions = await TypingQuestion.findAll({
                    attributes: ['id', 'typeAttributeId', 'content', 'scoringScalar']
                });
                console.log('questions in "typingQuestions resolver: ', questions);
                return questions;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});