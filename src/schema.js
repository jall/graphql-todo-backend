// @flow

import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';

import TodosQuery from './Query/TodosQuery';
import TodoQuery from './Query/TodoQuery';

let queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        todos: TodosQuery,
        todo: TodoQuery
    }
});

let schema = new GraphQLSchema({
    query: queryType
});

export default schema;
