/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = `query GetUsers($id: ID!) {
  getUsers(id: $id) {
    username
    email
    type
  }
}
`;
export const listUserss = `query ListUserss(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      email
      type
    }
    nextToken
  }
}
`;
