import { Resolver, Query, Mutation, Arg } from "type-graphql";
import CountryEntity, { CreateCountryInput } from "../entities/country.entity"
import CountryService from "../services/country.service";

@Resolver()
export class CountryResolver {
    @Query(() => [CountryEntity])
    async countries() {
        const countriesList = await new CountryService().listCountries();
        return countriesList;
    }

    @Mutation(() => CountryEntity)
    async createCountry(@Arg("data") data: CreateCountryInput) {
        const newCountry = await new CountryService().create(data)
        return newCountry
    }
    
}