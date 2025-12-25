export const FrostCursedChieftain = {
	"name": "Frost-Cursed Chieftain",
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
		{
			"ac": 12,
			"from": [
				"{@item leather armor|xphb}"
			]
		}
	],
	"hp": {
		"formula": "6d6",
		"average": 21
	},
	"speed": {
		"walk": 30
	},
	"str": 7,
	"dex": 15,
	"con": 10,
	"int": 14,
	"wis": 10,
	"cha": 8,
	"passive": 10,
	"cr": "1",
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
			"name": "Icy Demise",
			"entries": [
				"When the chieftain is reduced to 0 {@variantrule hit points|XPBH}, its body explodes into shards of ice. All creatures within 5 feet must succeed on a {@dc 12} {@skill Dexterity} saving throw or take {@damage 1d8} cold damage"
			]
		},
		{
			"name": "Inventions",
			"entries": [
				"The chieftain has a bag of tricks, allowing it to use one of the following abilities each turn as a bonus action.",
				"- Glacial Glue: The chieftain throws a small container that explodes into a sticky, icy substance. One creature within 20 feet must succeed on a {@dc 12} {@skill Dexterity} saving throw or be {@condition restrained}. A creature can use its action to make a {@dc 12} {@skill Strength} check to end the effect.",
				"- Frost Bomb: The chieftain throws a small orb that explodes in a 10-foot radius. Each creature in the area must succeed on a {@dc 12} {@skill Constitution} saving throw or take {@damage 2d6} cold damage."
			]
		}
	],
	"conditionInflict": [
		"restrained"
	],
	"miscTags": [
		"MW",
		"MLW",
		"AOE"
	],
	"action": [
		{
			"name": "Icy Dagger",
			"entries": [
				"{@atk mw} {@hit +4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage plus {@damage 1d4} cold damage."
			]
		}
	],
	"damageTags": [
		"P"
	]
}
