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
        createdAt
        updatedAt
        status
        category
      }
      nextToken
    }
    group
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
      group
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
        id
        number
        dot
        doubleDot
        line
        doubleLine
        position
        scoreId
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
      group
    }
    createdAt
    updatedAt
    status
    category
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
        group
      }
      createdAt
      updatedAt
      status
      category
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    createdAt
    rating
    userId
    scoreId
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      rating
      userId
      scoreId
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    number
    dot
    doubleDot
    line
    doubleLine
    position
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
        group
      }
      createdAt
      updatedAt
      status
      category
    }
    scoreId
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
      id
      number
      dot
      doubleDot
      line
      doubleLine
      position
      score {
        id
        name
        createdAt
        updatedAt
        status
        category
      }
      scoreId
    }
    nextToken
  }
}
`;
