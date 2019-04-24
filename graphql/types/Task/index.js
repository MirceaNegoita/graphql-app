exports = `
  type Task {
    _id: ID!
    title: String!
    description: String!
    status: String!
  }

  type Query {
    task(_id: ID!): [Task!]!
    tasks: [Task!]!
  }

  type Mutation {
    createTask(task: CreateTaskInput!): Task!
    updateTask(_id: ID!, task: UpdateTaskInput): Task!
    deleteTask(_id: ID!): Task!
  }

  type Subscription {
    task(postId: ID!): TaskSubscriptionPayload!
  }

  type TaskSubscriptionPayload {
    mutation: MutationType!
    task: Task!
  }

  input CreateTaskInput {
    title: String!
    description: String!
    status: String!
  }
  
  input UpdateTaskInput {
    text: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`
