export const onCreateUser = `
    subscription onCreateUser {
        onCreateUser {
            id
            username
            email
        }
    }
`

export const onCreateScore = `
    subscription onCreateScore {
        onCreateScore {
            id
            createdDate
            updatedDate
            status
            scoreUserId
        }
    }
`

