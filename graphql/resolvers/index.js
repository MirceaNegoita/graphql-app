const mergeResolvers = require("merge-graphql-schemas").mergeResolvers
const Task = require('./Task/index')

const resolvers = [Task];

export default mergeResolvers(resolvers);