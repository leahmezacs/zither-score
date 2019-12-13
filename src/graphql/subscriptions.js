/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($id: String) {
  onCreateUser(id: $id) {
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
export const onUpdateUser = `subscription OnUpdateUser($id: String) {
  onUpdateUser(id: $id) {
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
export const onDeleteUser = `subscription OnDeleteUser($id: String) {
  onDeleteUser(id: $id) {
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
export const onCreateScore = `subscription OnCreateScore {
  onCreateScore {
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
export const onUpdateScore = `subscription OnUpdateScore {
  onUpdateScore {
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
export const onDeleteScore = `subscription OnDeleteScore {
  onDeleteScore {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
        commentId
      }
      nextToken
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
        commentId
      }
      nextToken
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
        commentId
      }
      nextToken
    }
  }
}
`;
export const onCreateReply = `subscription OnCreateReply {
  onCreateReply {
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
    commentId
  }
}
`;
export const onUpdateReply = `subscription OnUpdateReply {
  onUpdateReply {
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
    commentId
  }
}
`;
export const onDeleteReply = `subscription OnDeleteReply {
  onDeleteReply {
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
    commentId
  }
}
`;
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
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
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
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
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
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
export const onCreateFeedback = `subscription OnCreateFeedback {
  onCreateFeedback {
    id
    name
    email
    comment
    createdAt
    status
  }
}
`;
export const onUpdateFeedback = `subscription OnUpdateFeedback {
  onUpdateFeedback {
    id
    name
    email
    comment
    createdAt
    status
  }
}
`;
export const onDeleteFeedback = `subscription OnDeleteFeedback {
  onDeleteFeedback {
    id
    name
    email
    comment
    createdAt
    status
  }
}
`;
