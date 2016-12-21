import { GraphQLNonNull, GraphQLString } from 'graphql';

import database from '../database';
import TodoType from '../Schema/TodoType';
import Todo from '../Model/Todo';

let AddTodoMutation = {
    type: TodoType,
    args: {
        text: {
            name: 'text',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, { text }) => {
        return new Promise((resolve, reject) => {
            return database.insert(new Todo(text, false), (error, document) => {
                error ? reject(error) : resolve(document);
            });
        });
    }
};

export default AddTodoMutation;
