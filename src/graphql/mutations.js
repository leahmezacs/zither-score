export const createUser = `mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
        id
        username
        email
    }
}`

export const updateUser = `mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
        id
        username
        email
    }
}`

export const deleteUser = `mutation deleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
        id
    }
}`

export const createScore = `mutation createScore($input: CreateScoreInput!) {
    createScore(input: $input) {
        id
        createdDate
        updatedDate
        status
        scoreUserId
    }
}`

export const deleteScore = `mutation deleteScore($input: DeleteScoreInput!) {
    deleteScore(input: $input) {
        id
    }
}`

export const createNote = `mutation createNote($input: CreateNoteInput!) {
    createNote(input: $input) {
        number
        dot
        doubleDot
        line
        doubleLine
        curve
        position
        noteScoreId
    }
}`


