import { MutationCreateCountryArgs } from "../generated/graphql";
import CountryRepository from "../repositories/country.repository"

export default class CountryService {
    db: CountryRepository;

    constructor() {
        this.db = new CountryRepository
    }

    async listCountries() {
        return await this.db.find()
    }

    async create(country: MutationCreateCountryArgs["data"]) {
        const newCountry = await this.db.save(country);
        return newCountry;
    }
}


// Crée une mutation qui prend en paramètres :

//     un code (FR, BE, AN, ...),
//     un nom (France, Belgique, Andorre, ...),
//     un emoji (🇫🇷, 🇧🇪, 🇦🇩, ...),