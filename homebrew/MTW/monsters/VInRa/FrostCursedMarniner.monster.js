export const FrostCursedMarinerMonster = {
	"name": "Frost-Cursed Mariner",
	"size": [
		"M"
	],
	"type": {
		"type": "undead",
		"note": "(Human)"
	},
	"source": "MTW-VS",
	"alignment": [
		"L",
		"E"
	],
	"ac": [{
		"ac": 12,
		"from": [
			"{@item leather armor|xphb}"
		]
	}],
	"hp": {
		"formula": "3d8 + 3",
		"average": 16
	},
	"speed": {
		"walk": 30
	},
	"str": 13,
	"dex": 12,
	"con": 12,
	"int": 10,
	"wis": 10,
	"cha": 10,
	"passive": 10,
	"cr": "1/2",
	"languages": [
		"Common",
		"understands the commands of Harann Nemmonis"
	],
	"languageTags": [
		"C"
	],
	"trait": [{
		"name": "Icy Demise",
		"entries": [
			"When the mariner is reduced to 0 {@variantrule hit points|XPHB}, its body shatters into shards of ice. All creatures within 5 feet must succeed on a {@dc 10} {@skill Dexterity} saving throw or take {@damage 1d4} cold damage."
		]
	}],
	"action": [{
		"name": "Icy Cutlass",
		"entries": [
			"{@atk mw} {@hit +3} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage plus {@damage 1d4} cold damage."
		]
	}],
	"damageTags": [
		"S"
	],
	"savingThrowForced": [
		"dexterity"
	],
	"miscTags": [
		"MW"
	]
}
