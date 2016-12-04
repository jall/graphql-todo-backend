import { GraphQLID } from 'graphql';

import TodoType from '../Schema/TodoType';
import database from '../database';

let TodoQuery = {
    type: TodoType,
    args: {
        _id: {
            type: GraphQLID
        }
    },
    resolve: (_, { _id }) => {
        return new Promise((resolve, reject) => {
            database.findOne({ _id: _id }, (error, document) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(document);
                  }
              });
          });
    }
};

export default TodoQuery;
