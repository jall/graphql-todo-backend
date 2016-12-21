// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import AddTodoMutation from './Mutation/AddTodoMutation';
import TodosQuery from './Query/TodosQuery';
import TodoQuery from './Query/TodoQuery';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            todos: TodosQuery,
            todo: TodoQuery
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addTodo: AddTodoMutation
        }
    })
});

export default schema;
