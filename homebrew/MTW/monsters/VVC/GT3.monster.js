export const GT3 = {
	"name": "Glutonette T3 (The Fading Echo)",
	"size": [
		"M"
	],
	"type": "construct",
	"source": "MTW-VS",
	"alignment": [
		"C",
		"E"
	],
	"ac": [{
		"ac": 11,
		"from": [
			"natural armor"
		]
	}],
	"hp": {
		"formula": "10d8 + 20",
		"average": 65
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 10,
	"con": 12,
	"int": 6,
	"wis": 10,
	"cha": 8,
	"passive": 12,
	"cr": "1",
	"shortName": "GT3",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"understands the languages it knew in life but can't speak"
	],
	"languageTags": [
		"CS",
		"LF"
	],
	"skill": {
		"perception": "+2"
	},
	"resist": [
		"psychic"
	],
	"conditionImmune": [
		"charmed",
		"exhaustion",
		"frightened",
		"poisoned"
	],
	"trait": [{
		"name": "Ephemeral Presence",
		"entries": [
			"When the Gluttonette T3 is reduced to 0 hit points, it dissolves into faint purple mist. This mist causes a wave of minor disorientation. Each creature within 10 feet of where it dissolved must make a {@dc 11} Constitution saving throw, taking 7 ({@damage 2d6}) psychic damage on a failed save, or half as much damage on a successful one."
		]
	}],
	"miscTags": [
		"MW",
		"AOE"
	],
	"action": [{
		"name": "Soul Shiver",
		"entries": [
			"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}10 ({@damage 3d6}) psychic damage."
		]
	}],
	"damageTags": [
		"Y"
	],
	"savingThrowForced": [
		"constitution"
	]
}
