export const FrostCursedKobold = {
	"name": "Frost-Cursed Kobold",
	"size": [
		"S"
	],
	"type": "aberration",
	"source": "MTW-VS",
	"alignment": [
		"L",
		"E"
	],
	"ac": [
		12
	],
	"hp": {
		"formula": "2d6 - 2",
		"average": 5
	},
	"speed": {
		"walk": 30
	},
	"str": 7,
	"dex": 15,
	"con": 9,
	"int": 8,
	"wis": 7,
	"cha": 8,
	"passive": 8,
	"cr": "1/8",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"Common",
		"understands the commands of Harann Nemmonis"
	],
	"languageTags": [
		"C"
	],
	"trait": [
		{
			"name": "Pack Tactics",
			"entries": [
				"The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
			]
		},
		{
			"name": "Icy Demise",
			"entries": [
				"When the kobold is reduced to 0 {@variantrule hit points|XPHB}, its body explodes into shards of ice. All creatures within 5 feet must succeed on a {@dc 10} {@skill Dexterity} saving throw or take {@damage 1d6} cold damage."
			]
		}
	],
	"traitTags": [
		"Pack Tactics"
	],
	"action": [
		{
			"name": "Icy Javelin",
			"entries": [
				"{@atk mw,rw} {@hit +4} to hit, reach 5 ft. or range 30/120 ft., one target. {@h}5 ({@damage 1d4 + 2}) piercing damage plus {@damage 1d4} cold damage."
			]
		}
	],
	"miscTags": [
		"RW",
		"MW",
		"MLW",
		"THW"
	],
	"damageTags": [
		"P"
	]
}
