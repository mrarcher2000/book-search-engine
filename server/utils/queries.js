import gql from 'graphql-tags';

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