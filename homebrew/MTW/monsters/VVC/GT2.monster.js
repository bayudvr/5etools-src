export const GT2 = {
	"name": "Gluttonette T2 (The Hungry Husk)",
	"size": [
		"M"
	],
	"type": "construct",
	"source": "MTW-VS",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		{
			"ac": 12,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"formula": "12d8 + 24",
		"average": 78
	},
	"speed": {
		"walk": 30
	},
	"str": 12,
	"dex": 10,
	"con": 14,
	"int": 6,
	"wis": 10,
	"cha": 8,
	"passive": 12,
	"cr": "1",
	"shortName": "GT2",
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
	"trait": [
		{
			"name": "Lingering Hunger",
			"entries": [
				"When the Gluttonette T2 damages a creature, the target's speed is reduced by 10 feet until the end of its next turn. This effect does not stack."
			]
		}
	],
	"action": [
		{
			"name": "Suffocating Embrace",
			"entries": [
				"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) bludgeoning damage plus 3 ({@damage 1d6}) necrotic damage. If the target is a Medium or smaller creature, it is {@condition grappled} (escape {@dc 12}). Until this grapple ends, the Gluttonette T2 can't use its Suffocating Embrace on another target"
			]
		}
	],
	"conditionInflict": [
		"grappled"
	],
	"damageTags": [
		"B",
		"N"
	],
	"miscTags": [
		"MW"
	]
}
