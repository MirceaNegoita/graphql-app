const mergeTypes = require("merge-graphql-schemas").mergeTypes
const Task = require('./Task/index')

const typeDefs = [Task];

exports = mergeTypes(typeDefs)