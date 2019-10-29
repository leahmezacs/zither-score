export const ListUsers = `
    query ListUsers {
        listUsers {
            items {
                id
                username
                createdAt
            }
        }
    }
`

export const GetUser = `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            username
        }
    }
`