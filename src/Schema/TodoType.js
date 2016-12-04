// @flow

import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString
} from 'graphql';

let TodoType = new GraphQLObjectType({
  name: 'todo',
  fields: () => {
    return {
      _id: {
        type: GraphQLID
      },
      text: {
        type: GraphQLString
      },
      complete: {
        type: GraphQLBoolean
      }
    }
  }
});

export default TodoType;
