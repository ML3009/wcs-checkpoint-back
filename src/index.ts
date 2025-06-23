import { ApolloServer } from "@apollo/server";
import * as path from "path";
import { createSchema } from "./lib/buildSchema";
import { startStandaloneServer } from "@apollo/server/standalone"
import datasource from "./lib/datasource";
import { Builder, fixturesIterator, Loader, Parser, Resolver } from 'typeorm-fixtures-cli/dist';

async function loadFixtures() {
  const loader = new Loader();
  loader.load(path.resolve(__dirname, "./fixtures"));

  const resolver = new Resolver();
  const fixtures = resolver.resolve(loader.fixtureConfigs);
  const builder = new Builder(datasource, new Parser(), false);

  for (const fixture of fixturesIterator(fixtures)) {
    const entity: any = await builder.build(fixture);
    await datasource.getRepository(fixture.entity).save(entity);
  }
}

async function main() {
    const schema = await createSchema();
    const server = new ApolloServer<{}>({
        schema,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000},
    });
    await datasource.initialize();
    await loadFixtures()
    console.log(`Server ready at ${url}`);
}
main()