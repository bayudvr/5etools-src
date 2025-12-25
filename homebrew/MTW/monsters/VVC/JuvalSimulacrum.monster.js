export const JuvalSimulacrum = {
	"name": "Juval Simulacrum",
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
			"ac": 14,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"formula": "14d8 + 28",
		"average": 91
	},
	"speed": {
		"walk": 30,
		"fly": 30
	},
	"str": 14,
	"dex": 12,
	"con": 14,
	"int": 8,
	"wis": 12,
	"cha": 14,
	"passive": 13,
	"cr": "3",
	"shortName": "JS",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"understands Common and Abyssal but can't speak",
		"telepathy 60 ft. (with its controller)"
	],
	"languageTags": [
		"AB",
		"C",
		"CS",
		"TP"
	],
	"skill": {
		"deception": "+4",
		"perception": "+3"
	},
	"resist": [
		"psychic"
	],
	"trait": [
		{
			"name": "Controlled by Juval",
			"entries": [
				"The Juval Simulacrum is mentally linked to Juval Garnix. Juval can, as a bonus action, command the Simulacrum to move and take an action. If Juval is {@condition incapacitated} or more than 120 feet away, the Simulacrum becomes inert until Juval is restored or moves closer."
			]
		},
		{
			"name": "Mask of Illusions",
			"entries": [
				"The Simulacrum can cast {@spell minor illusion} at will, requiring no material components. Its illusions are always tinged with a faint purple glow or a subtle, unsettling shimmer."
			]
		},
		{
			"name": "Fading Charm",
			"entries": [
				"When a creature hostile to the Simulacrum starts its turn within 10 feet of the Simulacrum, the Simulacrum can force the creature to make a {@dc 12} Wisdom saving throw. On a failed save, the creature has disadvantage on its next attack roll before the end of its next turn."
			]
		},
		{
			"name": "Gluttonous Nature",
			"entries": [
				"When a creature within 30 feet of the Simulacrum is reduced to 0 hit points, the Simulacrum regains 10 hit points."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The Juval Simulacrum makes two Slam attacks."
			]
		},
		{
			"name": "Slam",
			"entries": [
				"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) bludgeoning damage plus 5 ({@damage 1d10}) psychic damage."
			]
		}
	],
	"actionTags": [
		"Multiattack"
	],
	"miscTags": [
		"MW"
	],
	"bonus": [
		{
			"name": "Whisper of Doubt",
			"entries": [
				"The Simulacrum targets one creature it can see within 30 feet. The target must succeed on a {@dc 12} Wisdom saving throw or be filled with a fleeting sense of despair, imposing disadvantage on the next saving throw it makes against a spell or magical effect until the end of its next turn."
			]
		}
	],
	"isNpc": true,
	"fluff": {
		"entries": [
			"Ini adalah Gluttonette, namun bukan Gluttonette biasa. Ia telah diberi topeng khusus yang dibuat dari fragmen kekuatan Vaelithra (melalui Varquin), memberinya kemampuan dan kesadaran parsial yang lebih tinggi. Karena topeng ini, ia menjadi perpanjangan tangan Juval, mampu melakukan ilusi sederhana dan terikat pada kehendak sang Dalang. Ia bergerak dengan keanggunan yang tidak wajar untuk ukuran Gluttonette, seolah ada dalang tak kasat mata yang menarik benangnya, dan topengnya menunjukkan ekspresi senyum yang membingungkan."
		]
	},
	"damageTags": [
		"B",
		"Y"
	],
	"savingThrowForced": [
		"wisdom"
	]
}
