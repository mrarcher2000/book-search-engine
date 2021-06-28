import React from 'react';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3000'
// });


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token? `Bearer ${token}` : ``
      }
    });
  },

  uri: `/graphql`,
  cache: new InMemoryCache()

});



function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </ApolloProvider>
    </Router>
  );
}

export default App;
