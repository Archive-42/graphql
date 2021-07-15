import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    events: [Event]
  }
  type Event {
    title: String
    date: String
    location: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    events: (root, args, context) => {
      return [{
        title: 'GraphQL Summit 2017',
        date: '25-26 October, 2017',
        location: 'San Fransisco',
      }, {
        title: 'The People\'s Query Language',
        date: '21st June, 2017',
        location: 'Denver, Colorado, USA'
      }]
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
