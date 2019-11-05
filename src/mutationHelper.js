import * as mutations from './graphql/mutations';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

export const createUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.CreateUser, { user })
        );
        assertErrors(response);
        return response.data.createUser;
    } catch (e) {
        Analytics.record({
            name: 'CreateUserError',
            attributes: {
                error: e.message
            }
        })
    }
