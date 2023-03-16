import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GET_USER($userId: Int!) {
      getUser(id: $userId){
          id, name, email
      }
  }
`
