// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import AddTodoMutation from './Mutation/AddTodoMutation';
import DeleteTodoMutation from './Mutation/DeleteTodoMutation';
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
            addTodo: AddTodoMutation,
            deleteTodo: DeleteTodoMutation
        }
    })
});

export default schema;
