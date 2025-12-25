export const JuvalNPC = {
	"name": "Juval Garnix (The Withered Dalang)",
	"size": [
		"M"
	],
	"type": {
		"type": "humanoid",
		"note": "(half-elf)"
	},
	"source": "MTW-VS",
	"alignment": [{
		"special": "chaotic neutral (currently leaning towards tragic evil)"
	}],
	"ac": [{
		"ac": 15,
		"from": [
			"{@item studded leather armor|xphb|studded leather}"
		]
	}],
	"hp": {
		"formula": "16d8 + 32",
		"average": 104
	},
	"speed": {
		"walk": 30
	},
	"str": 8,
	"dex": 14,
	"con": 14,
	"int": 12,
	"wis": 16,
	"cha": 18,
	"passive": 13,
	"cr": "7",
	"shortName": "Juval Garnix",
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
		"wis": "+6",
		"cha": "+7"
	},
	"skill": {
		"deception": "+7",
		"insight": "+6",
		"performance": "+7",
		"persuasion": "+7",
		"arcana": "+4"
	},
	"resist": [{
		"resist": [
			"psychic"
		],
		"note": "from Belgruth's influence",
		"cond": true
	}],
	"immune": [{
		"immune": [],
		"preNote": "None",
		"note": "but prone to the Frightened condition from Belgruth's Aura of Despair"
	}],
	"spellcasting": [{
			"name": "Pact Magic",
			"headerEntries": [
				"Juval is a 7th-level spellcaster. His spellcasting ability is Charisma (spell save {@dc 15}, +7 to hit with spell attacks). He has two 4th-level spell slots, which he regains after a short or long rest. He knows the following warlock spells:"
			],
			"spells": {
				"0": {
					"spells": [
						"{@spell Eldritch Blast|XPHB} (2 Beams)",
						"{@spell Friends|XPHB}",
						"{@spell Minor Illusion|XPHB}"
					]
				},
				"1": {
					"spells": [
						"{@spell Charm Person|XPHB}",
						"{@spell Faerie Fire|XPHB}"
					],
					"slots": 0,
					"lower": 1
				},
				"2": {
					"spells": [
						"{@spell Hold Person|XPHB}",
						"{@spell Misty Step|XPHB}"
					],
					"slots": 0,
					"lower": 1
				},
				"3": {
					"spells": [
						"{@spell Counterspell|XPHB}",
						"{@spell Fear|XPHB}",
						"{@spell Hypnotic Pattern|XPHB}"
					],
					"slots": 0,
					"lower": 1
				},
				"4": {
					"spells": [
						"{@spell Blight|XPHB}",
						"{@spell Phantasmal Killer|XPHB}"
					],
					"slots": 0,
					"lower": 1
				}
			},
			"ability": "cha",
			"type": "spellcasting"
		},
		{
			"name": "Eldritch Invocation",
			"headerEntries": [
				"Juval has the following Eldritch Invocations:"
			],
			"footerEntries": [
				"-  Agonizing Blast: When he casts {@spell eldritch blast}, he adds his Charisma modifier to the damage roll of each beam.",
				"-  Misty Visions: He can cast {@spell silent image} at will, without expending a spell slot or material components.",
				"-  Mask of Many Faces: He can cast {@spell disguise self} at will, without expending a spell slot or material components."
			],
			"type": "spellcasting"
		}
	],
	"spellcastingTags": [
		"CL",
		"O"
	],
	"trait": [{
			"name": "Fey Presence (1/Short or Long Rest)",
			"entries": [
				"As a bonus action, Juval can cause each creature in a 10-foot cube originating from him to make a {@dc 15} Wisdom saving throw. The creatures that fail their saving throw are either {@condition charmed} or {@condition frightened} by Juval (Juval's choice) until the end of Juval's next turn."
			]
		},
		{
			"name": "Withered Heart",
			"entries": [
				"Juval has disadvantage on saving throws against effects that cause the {@condition Frightened|XPHB} condition. However, if he succeeds on a saving throw against being {@condition frightened}, he can immediately use his reaction to cast one warlock spell he knows with a casting time of 1 action, without expending a spell slot."
			]
		},
		{
			"name": "Echo of Vaelithra",
			"entries": [
				"Once per short or long rest, Juval can inspire a glimmer of hope in one creature he can see within 30 feet. That creature gains advantage on its next attack roll, saving throw, or ability check made within the next minute."
			]
		}
	],
	"miscTags": [
		"RW",
		"MW",
		"MLW",
		"THW",
		"RA",
		"AOE"
	],
	"action": [{
			"name": "Dagger",
			"entries": [
				"{@atk mw,rw} {@hit +5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) Piercing damage."
			]
		},
		{
			"name": "Eldritch Blast",
			"entries": [
				"{@atk rs} {@hit 7} to hit, range 120 ft., one target. {@h}{@damage 1d10 + 4} force damage."
			]
		}
	],
	"attachedItems": [
		"dagger|phb"
	],
	"fluff": {
		"entries": [
			"Juval adalah dalang utama Violet Carnival, seorang pria yang dulunya penuh semangat dan karisma. Namun, setelah kesepakatan pahit dengan Belgruth demi menyelamatkan karnaval dan istrinya, Sylvia, jiwanya kini terbelenggu dalam keputusasaan. Kekuatan warlock-nya berasal dari ikatan yang rumit dengan Archfey yang terdistorsi (mungkin Vaelithra sendiri, atau entitas sejenis yang terpengaruh Belgruth), memberinya kemampuan untuk memanipulasi emosi dan ilusi, meskipun kini seringkali ia gunakan dalam kondisi yang rapuh dan sedih."
		]
	},
	"isNpc": true,
	"damageTags": [
		"P"
	],
	"damageTagsSpell": [
		"N",
		"O",
		"Y"
	],
	"savingThrowForced": [
		"wisdom"
	],
	"savingThrowForcedSpell": [
		"constitution",
		"dexterity",
		"wisdom"
	]
}
