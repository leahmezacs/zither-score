export const listUsers = `
    query listUsers {
        listUsers {
            items {
                id
                username
                email
            }
        }
    }
`

export const getUser = `
    query getUser($id: ID!) {
        getUser(id: $id) {
            id
            username
            email
        }
    }
`

export const listScores = `
    query listScores {
        listScores {
            items {
                id
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
`
