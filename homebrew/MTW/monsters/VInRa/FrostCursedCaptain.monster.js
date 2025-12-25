export const FrostCursedCaptain = {
	"name": "Frost-Cursed Captain",
	"size": [
		"M"
	],
	"type": "undead",
	"source": "MTW-VS",
	"alignment": [
		"L",
		"E"
	],
	"ac": [
		{
			"ac": 16,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"formula": "12d8 + 48",
		"average": 102
	},
	"speed": {
		"walk": 30,
		"swim": 40
	},
	"str": 18,
	"dex": 15,
	"con": 18,
	"int": 14,
	"wis": 13,
	"cha": 16,
	"passive": 14,
	"cr": "5",
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
	"save": {
		"str": "+7",
		"dex": "+5",
		"con": "+7",
		"int": "+5"
	},
	"skill": {
		"perception": "+4"
	},
	"trait": [
		{
			"name": "Icy Demise",
			"entries": [
				"When the captain is reduced to 0 {@variantrule hit points|XPHB}, its body shatters into shards of ice. All creatures within 10 feet must succeed on a {@dc 10} {@skill Dexterity} saving throw or take {@damage 3d6} cold damage."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The captain makes two attacks: one with its Icy Trident and one with its Bite."
			]
		},
		{
			"name": "Icy Trident",
			"entries": [
				"{@atk mw,rw} {@hit +7} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}11 ({@damage 2d6 + 4}) piercing damage plus {@damage 1d6} cold damage."
			]
		},
		{
			"name": "Bite",
			"entries": [
				"{@atk mw} {@hit +7} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage."
			]
		},
		{
			"name": "Chilling Roar {@recharge 5}",
			"entries": [
				"The captain roars, releasing a wave of cold. Each creature within 15 feet of the captain must succeed on a {@dc 13} {@skill Constitution} saving throw or be slowed until the end of its next turn."
			]
		}
	],
	"actionTags": [
		"Multiattack"
	],
	"miscTags": [
		"RW",
		"MW",
		"MLW",
		"THW",
		"AOE"
	],
	"damageTags": [
		"P"
	]
}
