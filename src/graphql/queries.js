/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    scores {
      items {
        id
        name
        createdDate
        updatedDate
        status
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      scores {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getScore = `query GetScore($id: ID!) {
  getScore(id: $id) {
    id
    name
    notes {
      items {
        number
        dot
        doubleDot
        line
        doubleLine
        curve
        row
        column
      }
      nextToken
    }
    user {
      id
      username
      email
      scores {
        nextToken
      }
    }
    createdDate
    updatedDate
    status
  }
}
`;
export const listScores = `query ListScores(
  $filter: ModelScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      notes {
        nextToken
      }
      user {
        id
        username
        email
      }
      createdDate
      updatedDate
      status
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    number
    dot
    doubleDot
    line
    doubleLine
    curve
    row
    column
    score {
      id
      name
      notes {
        nextToken
      }
      user {
        id
        username
        email
      }
      createdDate
      updatedDate
      status
    }
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      number
      dot
      doubleDot
      line
      doubleLine
      curve
      row
      column
      score {
        id
        name
        createdDate
        updatedDate
        status
      }
    }
    nextToken
  }
}
`;
