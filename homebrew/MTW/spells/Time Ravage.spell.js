export const TimeRavageSpell = {
	"name": "Time Ravage",
	"source": "MTW",
	"page": 1,
	"level": 9,
	"school": "T",
	"time": [
		{
			"number": 1,
			"unit": "action"
		}
	],
	"range": {
		"type": "point",
		"distance": {
			"type": "feet",
			"amount": 120
		}
	},
	"components": {
		"v": true,
		"s": true
	},
	"duration": [
		{
			"type": "instant"
		}
	],
	"entries": [
		"You unleash a wave of temporal energy at a creature you can see within range. The target must make a {@dc 26} Constitution saving throw, taking 10d10 force damage and aging 10 years on a failed save, or half as much damage and aging 5 years on a successful one.",
		"If the aging effect would cause the target to die of old age, the target dies instantly and turns to dust. Otherwise, the aging effect is permanent and cannot be reversed by any means short of a {@spell wish} spell."
	],
	"damageTags": [
		"F"
	],
	"miscTags": [
		"S"
	]
}
