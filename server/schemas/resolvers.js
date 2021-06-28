const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (params, res) => {
            const foundUser =  User.findOne({ _id: params._id });
            return foundUser;
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('That user does not exist');
            }

            if (password !== user.password) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
    
        saveBook({ user, body }, res) {
            console.log(user);
            try {
                const updatedUser = User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                );
                return res.json(updatedUser);
            } catch (err) {
                console.log(err);
                return res.status(400).json(err);
            }
        },
    
    
        removeBook: ({user, params}, res) => {
            const updatedUser = User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
              );
              if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
              }
              return res.json(updatedUser);
        }
    },
}

module.exports = resolvers;