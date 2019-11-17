/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createScore = `mutation CreateScore($input: CreateScoreInput!) {
  createScore(input: $input) {
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
export const updateScore = `mutation UpdateScore($input: UpdateScoreInput!) {
  updateScore(input: $input) {
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
export const deleteScore = `mutation DeleteScore($input: DeleteScoreInput!) {
  deleteScore(input: $input) {
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
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
