import { MutationCreateCountryArgs, QueryFindCountriesByContinentArgs, QueryFindCountryByCodeArgs } from "../generated/graphql";
import CountryRepository from "../repositories/country.repository";

export default class CountryService {
    db: CountryRepository;

    constructor() {
        this.db = new CountryRepository;
    }

    async listCountries() {
        return await this.db.find();
    }

    async findCountryByCode(data: QueryFindCountryByCodeArgs["data"]) {
        const country = await this.db.findOne({ where: { code: data.code } });
        if (!country) {
            throw new Error("No country found");
        }
        return country;
    }

    async findCountryByContinent(data: QueryFindCountriesByContinentArgs["data"]) {
        const countries = await this.db.find({ where: { continent: data.continent}});
        if (!countries) {
            throw new Error("No countries found");
        }
        return countries;
    }

    async create(country: MutationCreateCountryArgs["data"]) {
        const newCountry = await this.db.save(country);
        return newCountry;
    }
}