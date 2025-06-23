import { Resolver, Query, Mutation, Arg } from "type-graphql";
import CountryEntity, { CreateCountryInput, FindCountriesInput, FindCountryInput } from "../entities/country.entity";
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

    @Query(() => [CountryEntity])
    async findCountriesByContinent(@Arg("data") data: FindCountriesInput) {
        const countries = await new CountryService().findCountryByContinent(data);
        return countries;
    }


    @Mutation(() => CountryEntity)
    async createCountry(@Arg("data") data: CreateCountryInput) {
        const newCountry = await new CountryService().create(data);
        return newCountry;
    }
    
}