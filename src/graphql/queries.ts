import { gql } from "@apollo/client"

export const GET_USER_TOKEN = gql`
  query getUserToken($email: String!, $password: String!) {
    getUserToken(email: $email, password: $password)
  }
`

export const GET_ALL_USERS = gql`
  query getUsers {
    getUsers {
      id
      username
      firstName
      lastName
      email
    }
  }
`

export const GET_ALL_POSTS = gql`
  query getPosts {
    getPosts {
      id
      content
      authorId
      author {
        username
        firstName
        lastName
      }
      createdAt
    }
  }
`

export const GET_MESSAGES = gql`
  query GetMessages($conversationId: String!) {
    getMessages(conversationId: $conversationId) {
      id
      createdAt
      conversationId
      body
      senderId
      seen {
        firstName
        id
      }
    }
  }
`
