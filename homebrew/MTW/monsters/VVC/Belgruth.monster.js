export const Belgruth = {
	"name": "Belgruth, The Grand Puppeteer",
	"size": [
		"M"
	],
	"type": {
		"type": "fiend",
		"note": "(Demon)"
	},
	"source": "MTW-VS",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		{
			"ac": 16,
			"from": [
				"{@item glamoured studded leather|xdmg}"
			]
		}
	],
	"hp": {
		"formula": "20d8 + 80",
		"average": 170
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 14,
	"con": 18,
	"int": 18,
	"wis": 16,
	"cha": 20,
	"passive": 13,
	"cr": "8",
	"shortName": "Belgruth",
	"senses": [
		"truesight 120 ft."
	],
	"senseTags": [
		"U"
	],
	"languages": [
		"Abyssal",
		"Common",
		"Telepathy 120ft"
	],
	"languageTags": [
		"AB",
		"C"
	],
	"save": {
		"con": "+7",
		"int": "+7",
		"wis": "+6",
		"cha": "+8"
	},
	"skill": {
		"deception": "+8",
		"insight": "+6",
		"performance": "+8",
		"persuasion": "+8"
	},
	"resist": [
		"bludgeoning",
		"cold",
		"fire",
		"lightning",
		"piercing",
		{
			"special": "and Slashing from nonmagical attacks"
		}
	],
	"immune": [
		"poison"
	],
	"conditionImmune": [
		"charmed",
		"exhaustion",
		"frightened",
		"poisoned"
	],
	"traitTags": [
		"Legendary Resistances",
		"Magic Resistance"
	],
	"trait": [
		{
			"name": "Magic Resistance",
			"entries": [
				"The belgruth has advantage on saving throws against spells and other magical effects."
			]
		},
		{
			"name": "Aura of Temptation (15 ft radius)",
			"entries": [
				"Any creature hostile to Belgruth that starts its turn in this aura must make a {@dc 16} Wisdom saving throw. On a failed save, the creature has disadvantage on attack rolls and ability checks until the start of its next turn. On a successful save, the creature is immune to Belgruth's Aura of Temptation for the next 24 hours."
			]
		},
		{
			"name": "Grand Puppeteer",
			"entries": [
				"Belgruth can use a bonus action to command up to three Gluttonettes within 60 feet of him that he can see. Each Gluttonette can move up to its speed and make one attack."
			]
		},
		{
			"name": "Legendary Resistance (2/Day)",
			"entries": [
				"If the belgruth fails a saving throw, it can choose to succeed instead."
			]
		}
	],
	"spellcasting": [
		{
			"name": "Innate Spellcasting",
			"headerEntries": [
				"Belgruth's innate spellcasting ability is Charisma (spell save {@dc 16}). He can innately cast the following spells, requiring no material components:"
			],
			"will": [
				"{@spell Detect Thoughts|XPHB}",
				"{@spell Disguise Self|XPHB}",
				"{@spell Minor Illusion|XPHB}",
				"{@spell Suggestion|XPHB}"
			],
			"daily": {
				"1": [
					"{@spell Dominate Person|XPHB}",
					"{@spell Mass Suggestion|XPHB}"
				],
				"3e": [
					"{@spell Charm Person|XPHB}",
					"{@spell Enthrall|XPHB}",
					"{@spell Hold Person|XPHB}",
					"{@spell Phantasmal Force|XPHB}",
					"{@spell Raulothim's Psychic Lance|FTD}"
				]
			},
			"ability": "cha",
			"type": "spellcasting"
		}
	],
	"spellcastingTags": [
		"I"
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Belgruth makes two Draining Touch attacks."
			]
		},
		{
			"name": "Draining Touch",
			"entries": [
				"{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d6 + 5}) psychic damage, and Belgruth regains hit points equal to the damage dealt."
			]
		},
		{
			"name": "Puppeteer's Gaze {@recharge 5}",
			"entries": [
				"targets one creature he can see within 60 feet of him. The target must succeed on a {@dc 16} Wisdom saving throw or take 21 ({@damage 6d6}) psychic damage and be {@condition frightened} for 1 minute. The {@condition frightened} creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
			]
		}
	],
	"actionTags": [
		"Multiattack"
	],
	"miscTags": [
		"MW"
	],
	"conditionInflict": [
		"frightened"
	],
	"legendary": [
		{
			"name": "Move",
			"entries": [
				"Belgruth moves up to his speed."
			]
		},
		{
			"name": "Command Gluttonette (1 action)",
			"entries": [
				"Belgruth commands one Gluttonette within 60 feet of him to make one attack."
			]
		},
		{
			"name": "Whisper of Doubt (2 actions)",
			"entries": [
				"One creature Belgruth can see within 60 feet must make a {@dc 16} Wisdom saving throw. On a failed save, the creature has disadvantage on the next attack roll or ability check it makes."
			]
		}
	],
	"damageTags": [
		"Y"
	],
	"damageTagsSpell": [
		"Y"
	],
	"savingThrowForced": [
		"wisdom"
	],
	"savingThrowForcedSpell": [
		"intelligence",
		"wisdom"
	]
}
