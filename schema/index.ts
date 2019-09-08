import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools'; // https://www.npmjs.com/package/graphql-tools
import resolvers from './resolvers';

const typeDefs = importSchema('schema/typeDefs.graphql');

export default makeExecutableSchema({ resolvers, typeDefs });
