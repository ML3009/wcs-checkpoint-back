import { IProcessor } from 'typeorm-fixtures-cli';
import CountryEntity from '../entities/country.entity';
import { faker } from '@faker-js/faker';

function countryCodeToFlagEmoji(code: string): string {
  return code
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

export default class CountryProcessor implements IProcessor<CountryEntity> {
  preProcess(name: string, object: any): any {
    object.code = faker.location.countryCode()
    object.name = faker.location.country()
    object.emoji = countryCodeToFlagEmoji(object.code);
    object.continent = faker.location.continent()

    return object;
  }
}
