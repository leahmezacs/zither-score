export const ListUsers = `
    query ListUsers {
        listUsers {
            items {
                id
                username
                email
            }
        }
    }
`

export const GetUser = `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            username
            email
        }
    }
`