export const Varquin = {
	"name": "Varquin",
	"size": [
		"M"
	],
	"type": {
		"type": "humanoid",
		"note": "(half-elf)"
	},
	"source": "MTW-VS",
	"alignment": [
		"C",
		"G"
	],
	"ac": [
		{
			"ac": 15,
			"from": [
				"{@item studded leather armor|xphb}"
			]
		}
	],
	"hp": {
		"formula": "16d8 + 32",
		"average": 104
	},
	"speed": {
		"walk": 30
	},
	"str": 8,
	"dex": 16,
	"con": 14,
	"int": 12,
	"wis": 16,
	"cha": 20,
	"passive": 13,
	"cr": "8",
	"shortName": "VQ",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"Common",
		"Elvish",
		"Sylvan"
	],
	"languageTags": [
		"C",
		"E",
		"S"
	],
	"save": {
		"dex": "+6",
		"wis": "+6",
		"cha": "+8"
	},
	"skill": {
		"arcana": "+4",
		"deception": "+8",
		"insight": "+6",
		"performance": "+8",
		"persuasion": "+8",
		"stealth": "+6"
	},
	"conditionImmune": [
		"charmed",
		"frightened"
	],
	"spellcasting": [
		{
			"name": "Spellcasting",
			"headerEntries": [
				"Varquin is a 10th-level spellcaster. Her spellcasting ability is Charisma (spell save {@dc 16}, +8 to hit with spell attacks). She has the following bard spells prepared:"
			],
			"spells": {
				"0": {
					"spells": [
						"{@spell mage hand|XPHB}",
						"{@spell minor illusion|XPHB}",
						"{@spell prestidigitation|XPHB}",
						"{@spell vicious mockery|XPHB}"
					]
				},
				"1": {
					"spells": [
						"{@spell charm person|XPHB}",
						"{@spell comprehend languages|XPHB}",
						"{@spell healing word|XPHB}",
						"{@spell sleep|XPHB}"
					],
					"slots": 4
				},
				"2": {
					"spells": [
						"{@spell calm emotions|XPHB}",
						"{@spell hold person|XPHB}",
						"{@spell phantasmal force|XPHB}"
					],
					"slots": 3
				},
				"3": {
					"spells": [
						"{@spell dispel magic|XPHB}",
						"{@spell hypnotic pattern|XPHB}",
						"{@spell major image|XPHB}"
					],
					"slots": 3
				},
				"4": {
					"spells": [
						"{@spell confusion|XPHB}",
						"{@spell dimension door|XPHB}"
					],
					"slots": 3
				},
				"5": {
					"spells": [
						"{@spell dominate person|XPHB}",
						"{@spell scrying|XPHB}"
					],
					"slots": 2
				}
			},
			"ability": "cha",
			"type": "spellcasting"
		}
	],
	"spellcastingTags": [
		"CB"
	],
	"trait": [
		{
			"name": "Fey Ancestry",
			"entries": [
				"The varquin has advantage on saving throws against being {@condition charmed}, and magic can't put the vq to sleep."
			]
		},
		{
			"name": "Bardic Inspiration (5/day)",
			"entries": [
				"As a bonus action, Varquin can inspire one creature (other than herself) she can see within 60 feet that can hear her. The creature gains one Bardic Inspiration die, a {@dice d8}. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the {@dice d20} before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time."
			]
		},
		{
			"name": "Vaelithra's Echo",
			"entries": [
				"Once per short or long rest, Varquin can project a soothing, yet unsettling, illusion that fills a 15-foot cube within 60 feet. Each creature in the area must make a {@dc 16} Wisdom saving throw. On a failed save, a creature is either {@condition charmed} or {@condition frightened} (Varquin's choice) until the end of its next turn. On a successful save, the creature is immune to this specific use of Vaelithra's Echo for 24 hours."
			]
		}
	],
	"traitTags": [
		"Fey Ancestry"
	],
	"conditionInflict": [
		"charmed",
		"frightened"
	],
	"miscTags": [
		"RW",
		"MW",
		"MLW",
		"THW",
		"AOE"
	],
	"action": [
		{
			"name": "Dagger",
			"entries": [
				"{@atk mw,rw} {@hit +6} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage."
			]
		}
	],
	"attachedItems": [
		"dagger|phb"
	],
	"reaction": [
		{
			"name": "Cutting Words (5/day)",
			"entries": [
				"When a creature that Varquin can see within 60 feet of her makes an attack roll, an ability check, or a damage roll, Varquin can use her reaction to expend one of her Bardic Inspiration uses, rolling a {@dice d8} and subtracting the number rolled from the creature's roll. She can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll, ability check, or saving throw succeeds or fails."
			]
		}
	],
	"fluff": {
		"entries": [
			"Varquin adalah peramal misterius Violet Carnival, dan secara rahasia adalah bagian dari esensi Vaelithra yang terpecah. Ia bergerak dengan keanggunan aneh dan senyum yang menyimpan ribuan rahasia. Kekuatannya terletak pada manipulasi emosi, ilusi, dan bisikan takdir, membimbing mereka yang ia anggap layak, namun menyembunyikan kebenaran pahit di balik setiap senyumnya."
		]
	},
	"damageTags": [
		"P"
	],
	"damageTagsSpell": [
		"O",
		"Y"
	],
	"savingThrowForced": [
		"wisdom"
	],
	"savingThrowForcedSpell": [
		"charisma",
		"intelligence",
		"wisdom"
	]
}
