export const GT1 = {
	"name": "Glutonnette T1 (The Ravenous Shadow)",
	"size": [
		"M"
	],
	"type": "construct",
	"source": "MTW-VS",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		{
			"ac": 13,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"formula": "10d8 + 40",
		"average": 85
	},
	"speed": {
		"walk": 30
	},
	"str": 14,
	"dex": 10,
	"con": 18,
	"int": 6,
	"wis": 10,
	"cha": 8,
	"passive": 12,
	"cr": "1",
	"shortName": "GT1",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"understands the languages it knew in life but can't speak"
	],
	"languageTags": [
		"CS",
		"LF"
	],
	"skill": {
		"perception": "+2"
	},
	"resist": [
		"psychic"
	],
	"conditionImmune": [
		"charmed",
		"exhaustion",
		"frightened",
		"poisoned"
	],
	"trait": [
		{
			"name": "Memory Drain",
			"entries": [
				"When the Gluttonette T1 hits a creature with a melee attack, the target must succeed on a {@dc 13} Wisdom saving throw or have disadvantage on its next attack roll or ability check until the end of its next turn."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The Gluttonette T1 makes two Slam attacks."
			]
		},
		{
			"name": "Slam",
			"entries": [
				"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d8 + 5}) bludgeoning damage plus 7 ({@damage 2d6}) psychic damage."
			]
		},
		{
			"name": "Echoing Wail {@recharge}",
			"entries": [
				"The Gluttonette T1 emits a mournful wail. Each creature within 15 feet of it must make a {@dc 13} Wisdom saving throw. On a failed save, a creature is {@condition frightened} until the end of its next turn."
			]
		}
	],
	"actionTags": [
		"Multiattack"
	],
	"miscTags": [
		"MW",
		"AOE"
	],
	"conditionInflict": [
		"frightened"
	],
	"damageTags": [
		"B",
		"Y"
	],
	"savingThrowForced": [
		"wisdom"
	]
}
