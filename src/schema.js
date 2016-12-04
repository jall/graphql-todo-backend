import { buildSchema } from 'graphql';

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export default schema;
