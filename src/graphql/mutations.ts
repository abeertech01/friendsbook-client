import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $firstName: String!
    $lastName: String
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    )
  }
`
export const CREATE_POST = gql`
  mutation AddPost($content: String!) {
    addPost(content: $content) {
      id
      content
      createdAt
      authorId
    }
  }
`

export const CREATE_CONVERSATION = gql`
  mutation AddConversation(
    $userIds: [String]!
    $isGroup: Boolean
    $name: String
  ) {
    addConversation(userIds: $userIds, isGroup: $isGroup, name: $name) {
      id
      createdAt
      isGroup
      lastMessageAt
      messages {
        id
        createdAt
        body
        sender {
          firstName
        }
      }
      name
      userIds
    }
  }
`

export const ADD_MESSAGE = gql`
  mutation AddMessage(
    $body: String!
    $conversationId: String!
    $senderId: String!
  ) {
    addMessage(
      body: $body
      conversationId: $conversationId
      senderId: $senderId
    ) {
      id
      createdAt
      body
    }
  }
`
