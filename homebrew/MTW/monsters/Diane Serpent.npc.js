export const DianeSerpentNPC = {
	"name": "Diane Serpent",
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
		"average": 180,
		"formula": "15d10 + 90"
	},
	"speed": {
		"walk": 30
	},
	"str": 20,
	"dex": 12,
	"con": 20,
	"int": 10,
	"wis": 14,
	"cha": 12,
	"save": {
		"str": "+10",
		"con": "+10"
	},
	"skill": {
		"athletics": "+10",
		"intimidation": "+5"
	},
	"languages": [
		"Common",
		"Dwarvish"
	],
	"cr": "10",
	"trait": [
		{
			"name": "Action Surge",
			"entries": [
				"Diane can take one additional action on her turn. Once she uses this feature, she must finish a short or long rest before she can use it again."
			]
		},
		{
			"name": "Second Wind",
			"entries": [
				"On her turn, Diane can use a bonus action to regain {@dice 1d10 + 15} hit points. Once she uses this feature, she must finish a short or long rest before she can use it again."
			]
		},
		{
			"name": "Indomitable (2/Day)",
			"entries": [
				"Diane can re-roll a saving throw that she fails. She must use the new roll."
			]
		},
		{
			"name": "Weapon Master",
			"entries": [
				"Diane's heavy hammer is a formidable weapon. She has a +2 bonus to attack rolls with her warhammer (included in the statblock)."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Diane makes three melee attacks with her warhammer."
			]
		},
		{
			"name": "Warhammer (Two-Handed)",
			"entries": [
				"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. Hit: 12 ({@dice 2d6 + 5}) bludgeoning damage."
			]
		}
	],
	"conditionImmune": [
		"exhaustion"
	]
}
