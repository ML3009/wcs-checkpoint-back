import { buildSchema } from "type-graphql";
import { CountryResolver } from "../resolvers/country.resolver"

export async function createSchema() {
    const schema = await buildSchema({
        resolvers: [CountryResolver]
    });
    return schema
}
