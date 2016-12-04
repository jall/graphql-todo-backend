// @flow

import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';
import TodoType from './Schema/TodoType';
import data from './data.js'
import objectToArray from './Utilities/ObjectToArray';

let queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        todos: {
            type: new GraphQLList(TodoType),
            resolve: () => {
                return objectToArray(data);
            }
        },
        todo: {
            type: TodoType,
            args: {
              id: { type: GraphQLInt }
            },
            resolve: (_, { id }) => {
                return data[id];
            }
        }
    }
});

let schema = new GraphQLSchema({
    query: queryType
});

export default schema;
