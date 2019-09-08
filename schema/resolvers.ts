import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { chats, messages } from '../db';

// https://www.apollographql.com/docs/tutorial/resolvers.html
// Implement the resolvers. Resolvers are presented in a JSON object where each resolver name should match the field name it represents.
const resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,

  Chat: {
    lastMessage(chat: any) {
      return messages.find(m => m.id === chat.lastMessage);
    },
  },

  Query: {
    chats() {
      return chats;
    },
  },
};

export default resolvers;
