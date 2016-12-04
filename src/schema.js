let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = schema;
