import gql from 'graphql-tag';

export const GET_ME = gql`
    query me {
        User {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }

`;