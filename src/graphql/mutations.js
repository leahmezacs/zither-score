export const CreateUser = `mutation CreateUser($user: CreateUserInput!) {
    createUser(input: $user) {
        id
        username
        email
        scores
    }
}`

