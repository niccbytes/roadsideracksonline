const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    itemCount: Int
    savedItems: [Item]
  }

  type Item {
    _id: ID!
    itemId: String!
  }


  type Auth {
    token: ID!
    user: User
  }

  input shopInput {
    itemId: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveItem(shopData: shopInput!): User
    removeItem(shopId: ID!): User
  }
`;

module.exports = typeDefs;
