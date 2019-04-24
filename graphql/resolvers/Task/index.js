const Task = require('../../../server/models/Task')

exports = {
  Query: {
    task: async (parent, { _id }, context, info) => {
      return await Task.find({ _id })
    },
    tasks: async (parent, args, context, info) => {
      const results = await Tasks.find({})
        .populate()
        .exec()

      return results.map(result => ({
        _id: result._id.toString(),
        title: result.title,
        description: result.description,
        status: result.status
      }))
    }
  },
  Mutation: {
    createTask: async (parent, { task }, context, info) => {
      const newTask = await new Task({
        title: task.title,
        description: task.description,
        status: task.status
      });

      return new Promise((resolve, reject) => {
        newTask.save((err, res) => {
          err ? reject(err) : resolve(res);
        })
      })
    },
    updateTask: async (parent, { _id, task }, context, info) => {
      return new Promise((resolve, reject) => {
        Task.findByIdAndUpdate(
          _id,
          { $set: { ...task } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        })
      })
    },
    deleteTask: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Task.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        })
      })
    }
  },
  Subscription: {
    task: {
      subscribe: (parent, args, { pubsub }) => {
        //return pubsub.asyncIterator(channel)
      }
    }
  },
}
