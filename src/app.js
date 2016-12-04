import { graphql, buildSchema } from 'graphql';
import schema from './schema';

let id = 1;
let query = `{
    todo(id: ${id}) {
        id,
        text,
        complete
    }
}`;

graphql(schema, query).then((response) => {
  console.log(response);
});
