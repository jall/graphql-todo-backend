import { GraphQLBoolean, GraphQLID, GraphQLNonNull } from 'graphql';

import database from '../database';

let DeleteTodoMutation = {
    type: GraphQLBoolean,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, { _id }) => {
        return new Promise((resolve, reject) => {
            return database.remove({ _id: _id }, (error, numberRemoved) => {
                error ? reject(error) : resolve(Boolean(numberRemoved));
            });
        });
    }
};

export default DeleteTodoMutation;
