export const VaeilTheGodofTimeCreature = {
	"name": "Vaeil, The God of Time",
	"source": "MTW",
	"page": 1,
	"size": [
		"G"
	],
	"type": "celestial",
	"alignment": [
		"L",
		"G"
	],
	"ac": [
		24
	],
	"hp": {
		"average": 500,
		"formula": "25d20 + 250"
	},
	"speed": {
		"walk": 60,
		"fly": 120
	},
	"str": 20,
	"dex": 20,
	"con": 30,
	"int": 30,
	"wis": 30,
	"cha": 30,
	"save": {
		"int": "+18",
		"wis": "+18",
		"cha": "+18"
	},
	"skill": {
		"arcana": "+18",
		"history": "+18",
		"insight": "+18"
	},
	"immune": [
		"radiant",
		"force",
		"psychic",
		"bludgeoning, piercing, slashing from nonmagical attacks"
	],
	"conditionImmune": [],
	"senses": [
		"truesight 120 ft."
	],
	"languages": [],
	"cr": "25",
	"legendary": [
		{
			"name": "Detect",
			"entries": [
				"Vaeil makes a Wisdom (Perception) check."
			]
		},
		{
			"name": "Chronal Shift (Costs 2 Actions)",
			"entries": [
				"Vaeil can reroll a saving throw it just failed. It must use the new roll. This can be used to counter an effect that would reduce its Legendary Resistance."
			]
		},
		{
			"name": "Divine Strike (Costs 3 Actions)",
			"entries": [
				"Vaeil makes one melee weapon attack. On a hit, the target takes an additional 27 ({@damage 5d10}) radiant damage."
			]
		}
	],
	"legendaryGroup": {
		"name": "Vaeil, The God of Time",
		"source": "VTRoSL1"
	},
	"trait": [
		{
			"name": "Innate Spellcasting",
			"entries": [
				"Vaeil's spellcasting ability is Wisdom (spell save {@dc 26}). He can innately cast the following spells, requiring no material components:",
				"At will: {@spell command}, {@spell time ravage|MTW}",
				"3/day each: {@spell banishment}, {@spell divine word}",
				"1/day each: {@spell foresight}, {@spell prismatic wall}"
			]
		},
		{
			"name": "Legendary Resistance (5/Day)",
			"entries": [
				"If Vaeil fails a saving throw, he can choose to succeed instead."
			]
		},
		{
			"name": "Time Reversal",
			"entries": [
				"If Vaeil would be reduced to 0 hit points, his current hit point total instead resets to 400 hit points, he recharges all his abilities, and he regains any expended uses of Legendary Resistance."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Vaeil makes two melee attacks with its radiant fists."
			]
		},
		{
			"name": "Radiant Fist",
			"entries": [
				"{@atk mw} {@hit 12} to hit, reach 15 ft., one target. Hit: 15 ({@damage 2d8 + 6}) bludgeoning damage plus 18 ({@damage 4d8}) radiant damage."
			]
		},
		{
			"name": "Temporal Warp",
			"recharge": [
				5,
				6
			],
			"entries": [
				"Vaeil chooses a point within 120 feet of him. A 30-foot-radius sphere centered on that point becomes a zone of temporal distortion until the start of his next turn. Each creature in that area must make a {@dc 26} Wisdom saving throw. On a failed save, the creature's speed is halved, and it can't take reactions. On a successful save, the creature's speed is halved. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
			]
		}
	],
	"languageTags": [
		"C",
		"A"
	],
	"damageTags": [
		"R",
		"F",
		"P",
		"B",
		"I",
		"S",
		"N"
	],
	"miscTags": [
		"MW",
		"RD",
		"W"
	]
}
