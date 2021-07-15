import React from 'react';
import { render } from 'react-dom';
import GraphiQL from 'graphiql';
import { schema } from './schema';
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLID, formatError } from 'graphql';

async function fetch(query) {
  console.log(query);
  const res = await graphql({
    schema,
    source: query.query,
    variableValues: query.variables,
    operationName: query.operationName,
    rootValue: {}
  });
  // format errors to plain JSON
  return JSON.parse(JSON.stringify(res));
}

setTimeout(() => 
render(<GraphiQL fetcher={fetch} />, document.getElementById('root')), 0);
 