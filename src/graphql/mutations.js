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

export const deleteUser = `mutation deleteUser($user: DeleteUserInput!) {
    deleteUser(input: $input) {
        id
        username
        email
        scores
    }
}`



