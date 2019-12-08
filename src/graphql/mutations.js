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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createScore = `mutation CreateScore($input: CreateScoreInput!) {
  createScore(input: $input) {
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
export const updateScore = `mutation UpdateScore($input: UpdateScoreInput!) {
  updateScore(input: $input) {
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
export const deleteScore = `mutation DeleteScore($input: DeleteScoreInput!) {
  deleteScore(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    createdAt
    rating
    userId
    scoreId
    replies {
      items {
        id
        content
        createdAt
        userId
      }
      nextToken
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    createdAt
    rating
    userId
    scoreId
    replies {
      items {
        id
        content
        createdAt
        userId
      }
      nextToken
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    createdAt
    rating
    userId
    scoreId
    replies {
      items {
        id
        content
        createdAt
        userId
      }
      nextToken
    }
  }
}
`;
export const createReply = `mutation CreateReply($input: CreateReplyInput!) {
  createReply(input: $input) {
    id
    content
    createdAt
    comment {
      id
      content
      createdAt
      rating
      userId
      scoreId
      replies {
        nextToken
      }
    }
    userId
  }
}
`;
export const updateReply = `mutation UpdateReply($input: UpdateReplyInput!) {
  updateReply(input: $input) {
    id
    content
    createdAt
    comment {
      id
      content
      createdAt
      rating
      userId
      scoreId
      replies {
        nextToken
      }
    }
    userId
  }
}
`;
export const deleteReply = `mutation DeleteReply($input: DeleteReplyInput!) {
  deleteReply(input: $input) {
    id
    content
    createdAt
    comment {
      id
      content
      createdAt
      rating
      userId
      scoreId
      replies {
        nextToken
      }
    }
    userId
  }
}
`;
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
export const createFeedback = `mutation CreateFeedback($input: CreateFeedbackInput!) {
  createFeedback(input: $input) {
    id
    name
    email
    comment
    createdAt
    status
  }
}
`;
export const updateFeedback = `mutation UpdateFeedback($input: UpdateFeedbackInput!) {
  updateFeedback(input: $input) {
    id
    name
    email
    comment
    createdAt
    status
  }
}
`;
export const deleteFeedback = `mutation DeleteFeedback($input: DeleteFeedbackInput!) {
  deleteFeedback(input: $input) {
    id
    name
    email
    comment
    createdAt
    status
  }
}
`;
