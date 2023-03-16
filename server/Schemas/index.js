const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const db = require("../database.js");

const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      async resolve () {
        return await db.users.findAll();
      }
    },
    getUser: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      async resolve ( parent, args ) {
        if (args?.id) {
          const { id } = args;
          return db.users.findByPk(id);
        }
        return {};
    }
  }}
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      async resolve(parent, args) {
        await db.users.create({name: args.name, email: args.email})
        return args;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
