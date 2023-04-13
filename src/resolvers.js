import User from "./models/User.js";

export default {
  Query: {
    getUsers: () => User.find(),
    getUser: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, args) => User.create(args),
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "User deleted successfuly";
    },
    updateUser: async (_, { id, ...rest }) => User.findByIdAndUpdate(id, rest),
  },
};
