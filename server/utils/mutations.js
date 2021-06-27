import gql from 'graphql-tags';

export const LOGIN_USER = gql`
    mutation login {
        Auth {
            token
            user
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser {
        Auth {
            token
            user
        }
    }
`;


export const SAVE_BOOK = gql`
    mutation saveBook {
        User {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook {
        User {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
`;