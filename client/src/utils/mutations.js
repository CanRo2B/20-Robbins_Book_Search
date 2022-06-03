// LOGIN_USER to execute the loginUser mutation set up using Apollo Server

// ADD_USER will run the addUser mutation

// SAVE_BOOK will run the saveBook mutation

// REMOVE_BOOK will run the removeBook mutation


import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const ADD_USER = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;