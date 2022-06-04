const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
      bookId: String!
      authors: [String]
      description: String
      title: String!
      image: String
      link: String
  }

  type Auth {
      token: ID!
      user: User
  }

  input SavedBookInput {
    authors: [String]
    title: String
    description: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login(email: String!, password: String): Auth
    addUser(username: String!, email: String!, password: String): Auth
    saveBook(_id: ID!, _id: bookId): User
    removeBook(_id: ID!, _id: bookId): User
    
  }
`;

module.exports = typeDefs;