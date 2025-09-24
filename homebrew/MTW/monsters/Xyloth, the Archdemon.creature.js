export const XyloththeArchdemonCreature = {
	"name": "Xy'loth, the Archdemon",
	"source": "MTW",
	"page": 1,
	"size": [
		"G"
	],
	"type": "fiend",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		22
	],
	"hp": {
		"average": 400,
		"formula": "20d20 + 200"
	},
	"speed": {
		"walk": 50,
		"fly": 80
	},
	"str": 26,
	"dex": 16,
	"con": 28,
	"int": 20,
	"wis": 24,
	"cha": 26,
	"save": {
		"str": "+14",
		"con": "+15",
		"cha": "+14"
	},
	"skill": {
		"intimidation": "+14",
		"deception": "+14"
	},
	"immune": [
		"fire",
		"necrotic",
		"psychic",
		"bludgeoning, piercing, slashing from nonmagical attacks"
	],
	"conditionImmune": [
		"charmed",
		"exhaustion",
		"frightened",
		"paralyzed",
		"poisoned",
		"unconscious"
	],
	"senses": [
		"truesight 120 ft."
	],
	"languages": [
		"Abyssal",
		"telepathy 120 ft."
	],
	"cr": "20",
	"legendary": [
		{
			"name": "Shattering Strike (Costs 2 Actions)",
			"entries": [
				"Xy'loth makes one melee weapon attack. On a hit, the target must make a {@dc 22} Constitution saving throw or have one nonmagical item it is carrying destroyed."
			]
		},
		{
			"name": "Corrupting Gaze (Costs 1 Action)",
			"entries": [
				"Xy'loth targets one creature he can see within 60 feet of him. The target must succeed on a {@dc 22} Wisdom saving throw or take 22 ({@damage 4d10}) psychic damage and become poisoned until the end of its next turn."
			]
		}
	],
	"legendaryGroup": {
		"name": "Xy'loth, the Archdemon",
		"source": "MTW"
	},
	"trait": [
		{
			"name": "Chaotic Aura",
			"entries": [
				"Any creature that starts its turn within 10 feet of Xy'loth must succeed on a {@dc 20} Charisma saving throw or become confused for 1 minute. A confused creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. While confused, a creature can't take reactions and must roll a {@dice d10} at the start of each of its turns to determine its behavior. On a 1-4, it does nothing. On a 5-6, it makes a melee attack against a random target. On a 7-8, it makes a ranged attack against a random target. On a 9-10, it does nothing."
			]
		},
		{
			"name": "Legendary Resistance (4/Day)",
			"entries": [
				"If Xy'loth fails a saving throw, he can choose to succeed instead."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Xy'loth makes three melee attacks: one with its bite and two with its claws."
			]
		},
		{
			"name": "Bite",
			"entries": [
				"{@atk mw} {@hit 14} to hit, reach 15 ft., one target. Hit: 19 ({@damage 2d10 + 8}) piercing damage plus 18 ({@damage 4d8}) psychic damage."
			]
		},
		{
			"name": "Claw",
			"entries": [
				"{@atk mw} {@hit 14} to hit, reach 10 ft., one target. Hit: 15 ({@damage 2d6 + 8}) slashing damage plus 9 ({@damage 2d8}) necrotic damage."
			]
		}
	],
	"languageTags": [
		"A"
	],
	"damageTags": [
		"P",
		"B",
		"S",
		"N"
	],
	"miscTags": [
		"MW",
		"RD",
		"W"
	]
}
