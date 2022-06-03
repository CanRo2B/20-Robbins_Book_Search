const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount:
    savedBooks [Book]
  }

  type Book {
      id: bookID
      authors: []
      description: String
      title: String
      image: String
      link: String
  }

  type Auth {
      token: ID!
      user: User
  }

  type Query {
    user: [User]
  }

  type Mutation {
    login(email: String!, password: String): Auth
    addUser(username: String!, email: String!, password: String): Auth
    getSingleUser(_id: ID!, username: String!)
    saveBook(_id: ID!, _id: bookId): Book
    removeBook(_id: ID!, _id: bookId): User
    
  }
`;

module.exports = typeDefs;