import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://eupen.stepzen.net/api/eager-joey/__graphql",
    headers: {
        Authorization: `{}`
    },
    cache: new InMemoryCache(),
});

export default client;