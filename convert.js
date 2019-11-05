const path = './src/i18n/';
const lang = ['en', 'fr'];

var yaml = require('js-yaml');
var fs = require('fs');

for (var ind in lang) {
    const obj = yaml.load(fs.readFileSync(`${path}${lang[ind]}.yml`, {encoding: 'utf-8'}));
    fs.writeFileSync(`${path}${lang[ind]}.json`, JSON.stringify(obj, null, 2));
}
