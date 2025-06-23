import { DataSource } from "typeorm";
import CountryEntity from "../entities/country.entity";

export default new DataSource({
    type: "sqlite",
    database: "wcs-checkpoint-back-orm.sqlite",
    entities:[CountryEntity],
    synchronize: true,
    logging: ["error", "query"]
})