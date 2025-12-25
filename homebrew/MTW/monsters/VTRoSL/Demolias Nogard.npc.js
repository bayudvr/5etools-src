export const DemoliasNogardNPC = {
	"name": "Demolias Nogard",
	"source": "MTW-VS",
	"size": [
		"M"
	],
	"type": "humanoid",
	"alignment": [
		"L",
		"G"
	],
	"ac": [
		18
	],
	"hp": {
		"average": 140,
		"formula": "15d10 + 60"
	},
	"speed": {
		"walk": 30
	},
	"str": 16,
	"dex": 12,
	"con": 18,
	"int": 10,
	"wis": 14,
	"cha": 20,
	"save": {
		"wis": "+7",
		"cha": "+9"
	},
	"skill": {
		"persuasion": "+9",
		"insight": "+7"
	},
	"languages": [
		"Common",
		"Elvish",
		"Celestial"
	],
	"cr": "10",
	"spellcasting": [
		{
			"name": "Spellcasting",
			"headerEntries": [
				"Demolias is a 15th-level spellcaster. His spellcasting ability is Charisma (spell save {@dc 17}). He has the following paladin spells prepared:"
			],
			"spells": {
				"1": {
					"slots": 4,
					"spells": [
						"bless",
						"compelled duel",
						"divine favor"
					]
				},
				"2": {
					"slots": 3,
					"spells": [
						"find steed",
						"magic weapon"
					]
				},
				"3": {
					"slots": 3,
					"spells": [
						"daylight",
						"revivify"
					]
				},
				"4": {
					"slots": 2,
					"spells": [
						"aura of life",
						"death ward"
					]
				}
			}
		}
	],
	"trait": [
		{
			"name": "Aura of Protection",
			"entries": [
				"Whenever Demolias or a friendly creature within 10 feet of him must make a saving throw, that creature gains a +5 bonus to the saving throw (included in the statblock)."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Demolias makes two melee attacks with his shortsword."
			]
		},
		{
			"name": "Shortsword",
			"entries": [
				"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. Hit: {@dice 1d6 + 3} piercing damage."
			]
		},
		{
			"name": "Divine Smite",
			"entries": [
				"When Demolias hits with a melee weapon attack, he can expend a spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is {@dice 2d8} for a 1st-level spell slot, plus {@dice 1d8} for each spell level higher than 1st, to a maximum of {@dice 5d8}."
			]
		}
	],
	"conditionImmune": [
		"charmed",
		"frightened"
	]
}
