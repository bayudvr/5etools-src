export const SilasTheHalfOrcCookNPC = {
	"name": "Silas, the Half-Orc Cook",
	"shortName":"Silas",
	"size": [
		"M"
	],
	"type": "aberration",
	"source": "MTW-VS",
	"alignment": [
		"C",
		"N"
	],
	"ac": [
		{
			"ac": 13,
			"from": [
				"{@item leather armor|xphb}"
			]
		}
	],
	"hp": {
		"formula": "6d8 + 18",
		"average": 45
	},
	"speed": {
		"walk": 30
	},
	"str": 16,
	"dex": 10,
	"con": 17,
	"int": 9,
	"wis": 12,
	"cha": 10,
	"passive": 11,
	"cr": "1",
	"shortName": "Silas",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"Common",
		"Orc"
	],
	"languageTags": [
		"C",
		"O"
	],
	"trait": [
		{
			"name": "Relentless Endurance",
			"entries": [
				"When Silas is reduced to 0 hit points, he can drop to 1 hit point instead. Once he uses this ability, he can't use it again until he finishes a long rest."
			]
		}
	],
	"action": [
		{
			"name": "Cleaver",
			"entries": [
				"{@atk mw} {@hit +5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) slashing damage."
			]
		},
		{
			"name": "Throwing Knife",
			"entries": [
				"{@atk rw} {@hit +2} to hit, range 20/60 ft., one target. {@h}3 ({@damage 1d4}) piercing damage"
			]
		}
	],
	"miscTags": [
		"MW",
		"RW"
	],
	"isNpc": true,
	"damageTags": [
		"P",
		"S"
	]
}
