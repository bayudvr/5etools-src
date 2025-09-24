export const ThaniaSchmidtNPC = {
	"name": "Captain Thania Schmidt",
	"size": [
		"M"
	],
	"type": {
		"type": "humanoid",
		"note": "(Human)"
	},
	"source": "MTW-VS",
	"alignment": [
		"C",
		"N"
	],
	"ac": [{
		"ac": 17,
		"from": [
			"{@item studded leather armor|xphb}, parrying cutlass"
		]
	}],
	"hp": {
		"formula": "12d8 + 24",
		"average": 78
	},
	"speed": {
		"walk": 30
	},
	"str": 14,
	"dex": 18,
	"con": 15,
	"int": 12,
	"wis": 14,
	"cha": 16,
	"passive": 15,
	"cr": "5",
	"shortName": "Thania",
	"languages": [
		"Common"
	],
	"languageTags": [
		"C"
	],
	"save": {
		"dex": "+7",
		"wis": "+5"
	},
	"skill": {
		"acrobatics": "+7",
		"deception": "+6",
		"intimidation": "+6",
		"perception": "+5"
	},
	"trait": [{
			"name": "Action Surge (Recharges after a Short or Long Rest)",
			"entries": [
				"On her turn, Thania can take one additional action."
			]
		},
		{
			"name": "Parry",
			"entries": [
				"Thania adds 2 to her AC against one melee attack that would hit her. To do so, she must see the attacker and be wielding a melee weapon."
			]
		}
	],
	"action": [{
			"name": "Multiattack",
			"entries": [
				"Thania makes three attacks: two with her Cutlass and one with her Hand Crossbow."
			]
		},
		{
			"name": "Cutlass",
			"entries": [
				"{@atk mw} {@hit +7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) slashing damage."
			]
		},
		{
			"name": "Hand Crossbow",
			"entries": [
				"{@atk rw} {@hit +7} to hit, range 30/120 ft., one target. {@h}7 ({@damage 1d6 + 4}) Piercing damage."
			]
		},
		{
			"name": "Gutsy Command {@recharge 5}",
			"entries": [
				"Thania chooses a friendly creature she can see within 30 feet. The creature can use its reaction to make one weapon attack or to move up to its speed."
			]
		}
	],
	"actionTags": [
		"Multiattack"
	],
	"miscTags": [
		"MW",
		"RW",
		"RNG"
	],
	"attachedItems": [
		"hand crossbow|phb"
	],
	"isNpc": true,
	"damageTags": [
		"P",
		"S"
	]
}
