import { ApolloServer } from "@apollo/server";
import { createSchema } from "./lib/buildSchema";
import { startStandaloneServer } from "@apollo/server/standalone"
import datasource from "./lib/datasource";

async function main() {
    const schema = await createSchema();

    const server = new ApolloServer<{}>({
        schema,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000},
    });

    await datasource.initialize();
    console.log(`Server ready at ${url}`);
}

main()