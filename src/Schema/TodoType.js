// @flow

import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let TodoType = new GraphQLObjectType({
  name: 'todo',
  fields: function () {
    return {
      id: {
        type: GraphQLInt
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
