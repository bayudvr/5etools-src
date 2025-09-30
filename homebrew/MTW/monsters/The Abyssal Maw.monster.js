export const TheAbyssalMawMonster = {
	"name": "The Abyssal Maw",
	"source": "MTW-VS",
	"page": 1,
	"size": [
		"L"
	],
	"type": "aberration",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		16
	],
	"hp": {
		"average": 112,
		"formula": "14d10+35"
	},
	"speed": {
		"walk": 40
	},
	"str": 19,
	"dex": 13,
	"con": 16,
	"int": 3,
	"wis": 11,
	"cha": 6,
	"resist": [
		"cold",
		"psychic"
	],
	"senses": [
		"darkvision 60 ft."
	],
	"languages": [
		"understands Abyssal but can't speak"
	],
	"cr": "5",
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The Maw makes two attacks: one with its Bite and one with its Claw."
			]
		},
		{
			"name": "Bite",
			"entries": [
				"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. Hit: 13 ({@damage 2d8 + 4}) piercing damage plus 5 ({@damage 1d10}) psychic damage. The target must succeed on a {@dc 15} Wisdom saving throw or become Frightened of the Maw until the end of its next turn."
			]
		},
		{
			"name": "Claw",
			"entries": [
				"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. Hit: 11 ({@damage 2d6 + 4}) slashing damage. If the target is a creature, it must succeed on a {@dc 15} Strength saving throw or be grappled (escape DC 15)."
			]
		}
	],
	"trait": [
		{
			"name": "Festering Feast",
			"entries": [
				"The Abyssal Maw regains 10 hit points at the start of its turn if it is in an area of corruption or within 5 feet of a grappled or frightened creature."
			]
		}
	],
	"conditionImmune": [
		"charmed",
		"frightened",
		"exhaustion"
	],
	"hasFluff": true,
	"hasFluffImages": true,
	"tokenHref": {
		"type": "external",
		"url": "https://i.imgur.com/nkpEcXP.png"
	}
}
