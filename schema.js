const { TypingQuestion, User } = require('./models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} = require('graphql');

// TypingQuestion Type

const TypingQuestionType = new GraphQLObjectType({
    name: 'TypingQuestion',
    fields: () => ({
        id: { type: GraphQLInt },
        typeAttributeId: { type: GraphQLInt },
        content: { type: GraphQLString },
        scoringScalar: { type: GraphQLInt }
    })
});

// User Type

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        email: { type: GraphQLString },
        auth0Id: { type: GraphQLString },
        profilePhoto: { type: GraphQLString },
        pTypeId: { type: GraphQLInt },
        currentMatches: { type: GraphQLList(UserType) },
        pendingMatches: { type: GraphQLList(UserType) },
        prospects: { type: GraphQLList(UserType) },
        denials: { type: GraphQLList(UserType) },
        rawEI: { type: GraphQLInt },
        rawNS: { type: GraphQLInt },
        rawFT: { type: GraphQLInt },
        rawJP: { type: GraphQLInt },
        isMatchable: { type: GraphQLBoolean }
    })
})

// Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        typingQuestions: {
            type: new GraphQLList(TypingQuestionType),
            async resolve(parent, args) {
                const questions = await TypingQuestion.findAll({
                    attributes: ['id', 'typeAttributeId', 'content', 'scoringScalar']
                });
                return questions;
            }
        }
    }
});

// Root Mutation

const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                auth0Id: { type: new GraphQLNonNull(GraphQLString) },
                profilePhoto: { type: new GraphQLNonNull(GraphQLString) },
                // isMatchable: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            async resolve(parentValue, args) {
                const user = await User.findOrCreate({
                    where: {
                        firstName: args.firstName,
                        email: args.email,
                        auth0Id: args.auth0Id,
                        profilePhoto: args.profilePhoto
                    }
                });
                console.log('user in create mutation: ', user);
                return user[0].dataValues;
            }
        },
        onBoardUser: {
            type: UserType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                gender: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                bio: { type: new GraphQLNonNull(GraphQLString) },
                rawEI: { type: new GraphQLNonNull(GraphQLString) },
                rawNS: { type: new GraphQLNonNull(GraphQLString) },
                rawFT: { type: new GraphQLNonNull(GraphQLString) },
                rawJP: { type: new GraphQLNonNull(GraphQLString) },

                // isMatchable: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            async resolve(parentValue, args) {
                const user = await User.findOne({
                    where: {
                        email: args.email,
                    }
                });
                await user.update({ ...args, isMatchable: true });
                console.log('user in create mutation: ', user);

                return user;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
