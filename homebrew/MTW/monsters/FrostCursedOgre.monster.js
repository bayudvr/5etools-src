export const FrostCursedOgre = {
	"name": "Frost-Cursed Ogre",
	"size": [
		"L"
	],
	"type": "giant",
	"source": "MTW-VS",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		{
			"ac": 11,
			"from": [
				"{@item hide armor|xphb}"
			]
		}
	],
	"hp": {
		"formula": "7d10 + 21",
		"average": 59
	},
	"speed": {
		"walk": 40
	},
	"str": 19,
	"dex": 8,
	"con": 16,
	"int": 5,
	"wis": 7,
	"cha": 7,
	"passive": 8,
	"cr": "2",
	"immune": [
		"cold"
	],
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"Giant",
		"understands the commands of Harann Nemmonis"
	],
	"languageTags": [
		"GI"
	],
	"trait": [
		{
			"name": "Icy Demise",
			"entries": [
				"When the ogre is reduced to 0 {@variantrule hit points|XPHB}, its body shatters into shards of ice. All creatures within 10 feet must succeed on a {@dc 10} {@skill Dexterity} saving throw or take {@damage 2d6} cold damage."
			]
		}
	],
	"action": [
		{
			"name": "Greatclub",
			"entries": [
				"{@atk mw} {@hit +6} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) Bludgeoning damage."
			]
		}
	],
	"miscTags": [
		"MW",
		"MLW"
	],
	"attachedItems": [
		"greatclub|phb"
	],
	"damageTags": [
		"B"
	]
}
