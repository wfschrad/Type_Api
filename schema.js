const { TypingQuestion, User, PType } = require('./models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const relMap = require('./utils/mapping');

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
        uploadedPhoto: { type: GraphQLString },
        preferredName: { type: GraphQLString },
        age: { type: GraphQLInt },
        gender: { type: GraphQLString },
        bio: { type: GraphQLString },
        pTypeId: { type: GraphQLInt },
        PType: { type: PTypeType },
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

//Personality Type

const PTypeType = new GraphQLObjectType({
    name: 'PType',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

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
        },
        user: {
            type: UserType,
            args: {
                email: { type: GraphQLString }
            },
            async resolve(parent, args) {
                const user = await User.findOne({
                    where: {
                        email: args.email
                    },
                    include: [
                        {
                            model: PType,
                            attributes: ['name', 'description']
                        }
                    ]
                });
                return user;
            }
        },
        prospects: {
            type: new GraphQLList(UserType),
            args: {
                userPTypeId: { type: GraphQLInt },
                relThresh: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                //build acceptable pTypeId array 

                const mapSlice = relMap[args.userPTypeId];
                console.log('mapSlice: ', mapSlice)
                const targetedSlice = mapSlice.slice(args.relThresh);
                console.log('targetedSlice: ', targetedSlice)

                const spreadTargets = [];
                targetedSlice.forEach(arr => {
                    arr.forEach(subArr => spreadTargets.push(...subArr));
                });
                console.log('spreadTargets: ', spreadTargets)

                //query db for all users with acceptable pTypeIds

                const prospectPool = await User.findAll({
                    where: {
                        pTypeId: { [Op.in]: spreadTargets }
                    },

                    //     include: [
                    //     {
                    //         model: PType,
                    //         attributes: ['name', 'description']
                    //     }
                    // ]
                });

                return prospectPool;

                //filter prospectPool for current matches or denials

                //return

                // const prospectPool = await User.findA({
                //     where: {
                //         email: args.email
                //     },
                // include: [
                //     {
                //         model: PType,
                //         attributes: ['name', 'description']
                //     }
                // ]
                // });
                return prospects;
            }
        },
        pType: {
            type: PTypeType,
            args: {
                id: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                const pType = await PType.findByPk(args.id);
                return pType;
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
                profilePhoto: { type: GraphQLString },
                // isMatchable: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            async resolve(parentValue, args) {
                let user = await User.findOrCreate({
                    where: {
                        firstName: args.firstName,
                        email: args.email,
                        auth0Id: args.auth0Id,
                        profilePhoto: args.profilePhoto
                    }
                });
                // let newUser;
                // if (!user.profilePhoto) {
                //     newUser = await user.update({ profilePhoto: args.profilePhoto })
                // }
                // if (newUser) return newUser[0].dataValues;
                return user[0].dataValues;
            }
        },
        onBoardUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                uploadedPhoto: { type: new GraphQLNonNull(GraphQLString) },
                preferredName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                gender: { type: new GraphQLNonNull(GraphQLString) },
                bio: { type: new GraphQLNonNull(GraphQLString) },
                rawEI: { type: new GraphQLNonNull(GraphQLInt) },
                rawNS: { type: new GraphQLNonNull(GraphQLInt) },
                rawFT: { type: new GraphQLNonNull(GraphQLInt) },
                rawJP: { type: new GraphQLNonNull(GraphQLInt) },

                // isMatchable: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            async resolve(parentValue, args) {
                const user = await User.findOne({
                    where: {
                        email: args.email,
                    }
                });

                // Calculate pTypeId

                let pTypeId = 1;
                if (args.rawJP >= 0) pTypeId += 1;
                if (args.rawFT >= 0) pTypeId += 2;
                if (args.rawNS >= 0) pTypeId += 4;
                if (args.rawEI >= 0) pTypeId += 8;
                await user.update({ ...args, isMatchable: true, pTypeId });

                return user;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
