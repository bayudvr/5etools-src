export const AcolyteofSilverLightMonster = {
	"name": "Acolyte of Silver Light",
	"source": "MTW-VS",
	"page": 1,
	"size": [
		"M"
	],
	"type": "humanoid",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		11
	],
	"hp": {
		"average": 18,
		"formula": "4d8"
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 12,
	"con": 10,
	"int": 10,
	"wis": 13,
	"cha": 11,
	"skill": {
		"religion": "+3"
	},
	"languages": [
		"Common",
		"Undercommon"
	],
	"cr": "1/4",
	"spellcasting": [
		{
			"name": "Spellcasting",
			"headerEntries": [
				"The acolyte is a 1st-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 11}, {@hit 3} to hit with spell attacks). He has the following cleric spells prepared:"
			],
			"spells": {
				"0": {
					"spells": [
						"sacred flame"
					]
				},
				"1": {
					"slots": 2,
					"spells": [
						"bane",
						"command"
					]
				}
			}
		}
	],
	"action": [
		{
			"name": "Dagger",
			"entries": [
				"{@atk mw} {@hit 3}, reach 5 ft., one target. Hit: 3 ({@damage 1d4 + 1}) piercing damage."
			]
		}
	],
	"conditionImmune": []
}
