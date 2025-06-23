import { Resolver, Query, Mutation, Arg } from "type-graphql";
import CountryEntity, { CreateCountryInput, FindCountryInput } from "../entities/country.entity";
import CountryService from "../services/country.service";

@Resolver()
export class CountryResolver {
    @Query(() => [CountryEntity])
    async countries() {
        const countriesList = await new CountryService().listCountries();
        return countriesList;
    }

    @Query(() => CountryEntity)
    async findCountryByCode(@Arg("data") data: FindCountryInput) {
        const country = await new CountryService().findCountryByCode(data);
        return country;
    }

    @Mutation(() => CountryEntity)
    async createCountry(@Arg("data") data: CreateCountryInput) {
        const newCountry = await new CountryService().create(data);
        return newCountry;
    }
    
}