// @flow

import { GraphQLList } from 'graphql';

import database from '../database';
import TodoType from '../Schema/TodoType';

let TodosQuery = {
    type: new GraphQLList(TodoType),
    resolve: () => {
        return new Promise((resolve, reject) => {
            database.find({}, (error, documents) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(documents);
                  }
            });
        });
    }
};

export default TodosQuery;
