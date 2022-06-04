// LOGIN_USER to execute the loginUser mutation set up using Apollo Server

// ADD_USER will run the addUser mutation

// SAVE_BOOK will run the saveBook mutation

// REMOVE_BOOK will run the removeBook mutation


import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(email: String!, password: String!) {
    login {
      _id
      email
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(username: String!, email: String!, password: String) {
    addUser {
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(_id: ID!, _id: bookId) {
    saveBook {
      _id
      authors
      description
      title
      image
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(_id: ID!, _id: bookId) {
    removeBook {
      _id
      authors
      description
      title
      image
      link
    }
  }
`;