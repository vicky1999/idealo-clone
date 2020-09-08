import {ApolloClient, InMemoryCache} from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
});

export default client;