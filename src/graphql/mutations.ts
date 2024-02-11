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
