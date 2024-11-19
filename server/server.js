import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Type definition - declares what clients can request
const typeDefs = `#graphql
  schema {
    query: Query # maps query definition to "Query" type below. This is the default.
  }

  type Query {
    greeting: String
  }
`;

// Implementation - code that knows how to return the actual values
const resolvers = {
  Query: {
    greeting: () => 'Hello world!', // resolver function
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);
