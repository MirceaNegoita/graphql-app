const GraphQLServer = require('graphql-yoga').GraphQLServer
const PubSub = require('graphql-yoga').PubSub
const mongoose = require('mongoose')
const dbUrl = require('./config/constants').dbUrl
const schema = require('../graphql/index')
const models = require('./models/index')

const pubsub = new PubSub();

const options = {
  port: 3000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
}

const context = {
  models,
  pubsub
}

mongoose.connect(dbUrl,{
    useCreateIndex: true,
    useNewUrlParser: true
    })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const server = new GraphQLServer({
  schema,
  context
})

server.start(options, () => {
  console.log('Server started on port 3000');
})
