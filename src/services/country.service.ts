import { MutationCreateCountryArgs, QueryFindCountryByCodeArgs } from "../generated/graphql";
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

    async create(country: MutationCreateCountryArgs["data"]) {
        const newCountry = await this.db.save(country);
        return newCountry;
    }
}