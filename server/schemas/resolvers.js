const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { loadStripe } = require('@stripe/stripe-js');

const stripe = loadStripe('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');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    saveItem: async (parent, { itemData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedItems: itemData } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
    removeItem: async (parent, { itemId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedItems: { itemId } } },
          { new: true }
        );

        return updatedUser;
      }


      throw AuthenticationError;
    },
    initiateCheckout: async (_, { input }) => {
      try {
        // Call Stripe API to create a Checkout Session
        const session = await stripe.checkout.sessions.create({
          // Pass necessary parameters like items, quantity, etc.
        });

        return {
          sessionId: session.id
        };
      } catch (error) {
        throw new Error('Error initiating checkout');
      }
    }
  
  },
};

module.exports = resolvers;
