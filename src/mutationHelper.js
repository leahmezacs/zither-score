import * as mutations from './graphql/mutations';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

