export const HighPriestofSilverLightMonster = {
	"name": "High Priest of Silver Light",
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
		14
	],
	"hp": {
		"average": 52,
		"formula": "8d8 + 16"
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 14,
	"con": 14,
	"int": 13,
	"wis": 17,
	"cha": 15,
	"save": {
		"wis": "+5",
		"cha": "+4"
	},
	"skill": {
		"deception": "+4",
		"intimidation": "+4"
	},
	"languages": [
		"Common",
		"Undercommon",
		"Abyssal"
	],
	"cr": "4",
	"spellcasting": [
		{
			"name": "Spellcasting",
			"headerEntries": [
				"The High Priest is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 15}, {@hit 7} to hit with spell attacks). He has the following cleric spells prepared:"
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
						"command",
						"guiding bolt"
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
						"bestow curse",
						"vampiric touch"
					]
				}
			}
		}
	],
	"trait": [
		{
			"name": "Fey Ancestry",
			"entries": [
				"The High Priest has advantage on saving throws against being charmed, and magic can't put him to sleep."
			]
		},
		{
			"name": "Sunlight Sensitivity",
			"entries": [
				"While in sunlight, the High Priest has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The High Priest makes two melee attacks."
			]
		},
		{
			"name": "Dagger",
			"entries": [
				"{@atk mw} {@hit 4}, reach 5 ft., one target. Hit: 4 ({@damage 1d4 + 2}) piercing damage."
			]
		}
	],
	"environment": [
		"underdark"
	],
	"soundClip": {
		"type": "internal",
		"path": "bestiary/high-priest-of-silver-light.mp3"
	},
	"languageTags": [
		"C",
		"UA",
		"A"
	],
	"damageTags": [
		"N",
		"P"
	],
	"miscTags": [
		"MW"
	],
	"conditionImmune": []
}
