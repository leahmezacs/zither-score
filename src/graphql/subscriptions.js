/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($id: String!) {
  onCreateUser(id: $id) {
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
export const onUpdateUser = `subscription OnUpdateUser($id: String!) {
  onUpdateUser(id: $id) {
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
export const onDeleteUser = `subscription OnDeleteUser($id: String!) {
  onDeleteUser(id: $id) {
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
export const onCreateScore = `subscription OnCreateScore {
  onCreateScore {
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
export const onUpdateScore = `subscription OnUpdateScore {
  onUpdateScore {
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
export const onDeleteScore = `subscription OnDeleteScore {
  onDeleteScore {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
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
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
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
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
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
