// @flow

import { graphql } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

let app = express();

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: {},
  graphiql: true,
}));

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: {}
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000');
console.log('GraphiQL can be accessed at localhost:4000/graphiql');
