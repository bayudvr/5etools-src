export const RorintheShantySingerNPC = {
	"name": "Rorin, the Shanty Singer",
	"shortName":"Rorin",
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
	"ac": [
		{
			"ac": 12,
			"from": [
				"{@item padded armor|xphb}"
			]
		}
	],
	"hp": {
		"formula": "5d8",
		"average": 22
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 14,
	"con": 11,
	"int": 13,
	"wis": 10,
	"cha": 14,
	"passive": 10,
	"cr": "1/4",
	"shortName": "Rorin",
	"skill": {
		"performance": "+4",
		"persuasion": "+4"
	},
	"languages": [
		"Common"
	],
	"languageTags": [
		"C"
	],
	"trait": [
		{
			"name": "Sea Shanty",
			"entries": [
				"Rorin can use a bonus action to sing a shanty. One friendly creature he can see within 30 feet gains temporary hit points equal to his proficiency bonus, or advantage on its next attack roll. He can do this a number of times equal to his Charisma modifier (minimum of 1). He regains all expended uses after a long rest."
			]
		}
	],
	"action": [
		{
			"name": "Dagger",
			"entries": [
				"{@atk mw,rw} {@hit +4} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) Piercing damage."
			]
		},
		{
			"name": "Sling",
			"entries": [
				"{@atk rw} {@hit +4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) Bludgeoning damage."
			]
		}
	],
	"miscTags": [
		"RW",
		"MW",
		"MLW",
		"THW",
		"RNG"
	],
	"attachedItems": [
		"dagger|phb",
		"sling|phb"
	],
	"damageTags": [
		"B",
		"P"
	],
	"isNPC":true
}
