import CountryEntity from "../entities/country.entity"
import datasource from "../lib/datasource"
import { Repository } from "typeorm"

export default class CountryRepository extends Repository<CountryEntity> {
    constructor() {
        super(CountryEntity, datasource.createEntityManager())
    }
}