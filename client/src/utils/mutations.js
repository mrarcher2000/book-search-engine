import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
                email
            }
        }
    }
`;


export const SAVE_BOOK = gql`
    mutation saveBook($book: saveBookParams) {
        saveBook(book: $book) {
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook($book: bookId) {
        removeBook(book: $book) {
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`;