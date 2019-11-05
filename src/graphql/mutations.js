export const createUser = `mutation createUser($user: CreateUserInput!) {
    createUser(input: $user) {
        username
        email
    }
}`

