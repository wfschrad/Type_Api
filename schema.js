const { TypingQuestion, User, PType, Match, Denial, PendingMatch } = require('./models');
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
        uploadedPhoto: { type: GraphQLString },
        preferredName: { type: GraphQLString },
        age: { type: GraphQLInt },
        gender: { type: GraphQLString },
        bio: { type: GraphQLString },
        pTypeId: { type: GraphQLInt },
        PType: { type: PTypeType },
        matches: { type: GraphQLList(UserType) },
        pendingMatches: { type: GraphQLList(UserType) },
        denials: { type: GraphQLList(UserType) },
        rawEI: { type: GraphQLInt },
        rawNS: { type: GraphQLInt },
        rawFT: { type: GraphQLInt },
        rawJP: { type: GraphQLInt },
        isMatchable: { type: GraphQLBoolean }
    })
})

// Match Type

const MatchType = new GraphQLObjectType({
    name: 'Match',
    fields: () => ({
        id: { type: GraphQLInt },
        user1: { type: UserType },
        user2: { type: UserType }
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
               userId: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                const user = await User.findByPk(args.userId, {
                    include: [
                        {
                            model: PType,
                            attributes: ['name', 'description']
                        },
                        'matches',
                        'denials',
                        'pendingMatches'
                    ]
                });
                return user;
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
        },
        // matches: {
        //     type: GraphQLList(UserType),
        //     args: {
        //         userId: { type: GraphQLInt }
        //     },
        //     async resolve(parent, args) {
        //         const matches = User.findAll
        //     }
        // }
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
        addMatch: {
            type: UserType,
            args: {
                user1: { type: new GraphQLNonNull(GraphQLInt) },
                user2: { type: new GraphQLNonNull(GraphQLInt) },
            },
            async resolve(parentValue, args) {
                // const match = await Match.create({...args}
                const user1 = await User.findByPk(args.user1, {
                    include: 'matches'
                });
                const user2= await User.findByPk(args.user2, {
                    include: 'matches'
                });
                user1.addMatches([user2]);
                user2.addMatches([user1]);
                // await user1.save();
                // await user2.save();

                //     , {
                //     include: [{
                //         model: User
                //     }]
                // });
                return user2;
            }
        },
        addDenial: {
            type: UserType,
            args: {
                user1: { type: new GraphQLNonNull(GraphQLInt) },
                user2: { type: new GraphQLNonNull(GraphQLInt) },
            },
            async resolve(parentValue, args) {
                // const match = await Match.create({...args}
                const user1 = await User.findByPk(args.user1, {
                    include: 'denials'
                });
                const user2= await User.findByPk(args.user2, {
                    include: 'denials'
                });
                user1.addDenials([user2]);
                user2.addDenials([user1]);
                // await user1.save();
                // await user2.save();

                //     , {
                //     include: [{
                //         model: User
                //     }]
                // });
                return user2;
            }
        },
        addPendingMatch: {
            type: UserType,
            args: {
                user1: { type: new GraphQLNonNull(GraphQLInt) },
                user2: { type: new GraphQLNonNull(GraphQLInt) },
            },
            async resolve(parentValue, args) {
                // const match = await Match.create({...args}
                const user1 = await User.findByPk(args.user1, {
                    include: 'pendingMatches'
                });
                const user2= await User.findByPk(args.user2, {
                    include: 'pendingMatches'
                });
                user1.addPendingMatches([user2]);
                user2.addPendingMatches([user1]);
                // await user1.save();
                // await user2.save();

                //     , {
                //     include: [{
                //         model: User
                //     }]
                // });
                return user2;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
