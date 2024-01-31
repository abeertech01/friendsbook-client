import { gql } from "@apollo/client"

export const GET_USER_TOKEN = gql`
  query getUserToken($email: String!, $password: String!) {
    getUserToken(email: $email, password: $password)
  }
`
