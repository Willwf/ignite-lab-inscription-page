import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oaess61g7k01z7gzijexr9/master',
  cache: new InMemoryCache()
})