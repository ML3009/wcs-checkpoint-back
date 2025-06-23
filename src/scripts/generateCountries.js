
const fs = require('fs');
const count = 20; 

let yaml = `entity: CountryEntity
processor: ../processor/countryProcessor
items:
`;

for (let i = 1; i <= count; i++) {
  yaml += `  country${i}: {}\n`;
}

fs.writeFileSync('src/fixtures/Country.yml', yaml);