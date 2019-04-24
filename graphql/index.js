const makeExecutableSchema = require("graphql-tools").makeExecutableSchema
const typeDefs = require('./types/index')
const resolvers = require('./resolvers/index')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

exports = schema