# GraphQL TodoMVC API

This is a simple GraphQL API to serve as a backend for a TodoMVC app.

## Installation

Install all dependencies via yarn (or npm).

```shell
yarn
```

Then build the application with gulp.

```shell
gulp build
```

Finally the API server can be run through the built _dist/app.js_ file, or using the yarn/npm shortcut command.

```shell
yarn start

# Equivalent to:
# npm start

# Or longhand:
node dist/app.js
```

## Usage

By default the API runs on _localhost:4000_.

There is a [GraphiQL](https://github.com/graphql/graphiql) server running on _localhost:4000/graphiql_ for query exploration & debugging.
