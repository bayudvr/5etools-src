export const PriestofSilverLightMonster = {
	"name": "Priest of Silver Light",
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
		13
	],
	"hp": {
		"average": 38,
		"formula": "7d8 + 7"
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 10,
	"con": 12,
	"int": 13,
	"wis": 16,
	"cha": 13,
	"save": {
		"wis": "+5",
		"cha": "+3"
	},
	"skill": {
		"religion": "+3"
	},
	"languages": [
		"Common",
		"Undercommon"
	],
	"cr": "2",
	"spellcasting": [
		{
			"name": "Spellcasting",
			"headerEntries": [
				"The priest is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 13}, {@hit 5} to hit with spell attacks). He has the following cleric spells prepared:"
			],
			"spells": {
				"0": {
					"spells": [
						"guidance",
						"sacred flame",
						"thaumaturgy"
					]
				},
				"1": {
					"slots": 4,
					"spells": [
						"bane",
						"command"
					]
				},
				"2": {
					"slots": 3,
					"spells": [
						"hold person",
						"inflict wounds"
					]
				},
				"3": {
					"slots": 2,
					"spells": [
						"bestow curse"
					]
				}
			}
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The priest makes two melee attacks."
			]
		},
		{
			"name": "Dagger",
			"entries": [
				"{@atk mw} {@hit 2}, reach 5 ft., one target. Hit: 3 ({@damage 1d4 + 1}) piercing damage."
			]
		}
	],
	"conditionImmune": []
}
