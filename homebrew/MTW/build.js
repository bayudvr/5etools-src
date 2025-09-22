import * as Adventures from './adventures/index.js';
import * as AdventureData from './adventureData/index.js';
import * as Deities from './deities/index.js';
import * as Items from './items/index.js';
import * as ItemTypes from './itemTypes/index.js';
import * as Monsters from './monsters/index.js';
import * as Spells from './spells/index.js';
import { meta } from './meta.js';
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outPath = join(__dirname, 'Malvidra Twisted World; Malvidra Collection.json');

const finalData = {
	_meta: meta,
	adventure: Object.values(Adventures),
	adventureData: Object.values(AdventureData),
	deity: Object.values(Deities),
	item: Object.values(Items),
	itemType: Object.values(ItemTypes),
	monster: Object.values(Monsters),
	spell: Object.values(Spells)
}

fs.writeFileSync(outPath, JSON.stringify(finalData, null, 2));
console.log(`✅ ${outPath} generated!`);
