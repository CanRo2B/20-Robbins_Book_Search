const { User, Book } = require('../models');
const {AuthentificationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
        if (context.user) {
            const userData =await User.findOne({_id: context.user._id}).selet(password)
        }
      return userData;
    },
    Book: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Book.find(params);
    },
  },

  Mutation: {

    login : async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      },

    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
    },
    // getSingleUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   return user;
    // },

    saveBook: async (parent, { _id, title}) => {
      const save = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`Book ${title } saved`]: 1 } },
        { new: true }
      );
      return save;
    },

    removeBook: async (parent, { _id, title}) => {
        const save = await Book.findOneAndUpdate(
          { _id },
          { $inc: { [`Book ${title } deleted`]: 1 } },
          { new: true }
        );
        return save;
      },
    }
}
module.exports = resolvers;