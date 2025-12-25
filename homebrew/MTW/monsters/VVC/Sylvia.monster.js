export const SylviaNPC = {
	"name": "Sylvia Garnix, The Beacon of Fading Hope",
	"size": [
		"M"
	],
	"type": {
		"type": "humanoid",
		"note": "(half-elf)"
	},
	"source": "MTW-VS",
	"alignment": [
		"L",
		"G"
	],
	"ac": [
		{
			"ac": 16,
			"from": [
				"{@item shield|xphb}",
				"{@item scale mail|xphb}"
			]
		}
	],
	"hp": {
		"formula": "12d8 + 12",
		"average": 66
	},
	"speed": {
		"walk": 30
	},
	"str": 10,
	"dex": 12,
	"con": 12,
	"int": 10,
	"wis": 18,
	"cha": 14,
	"passive": 14,
	"cr": "4",
	"shortName": "SG",
	"senses": [
		"darkvision 60 ft."
	],
	"senseTags": [
		"D"
	],
	"languages": [
		"Common",
		"Elvish"
	],
	"languageTags": [
		"C",
		"E"
	],
	"save": {
		"wis": "+6",
		"cha": "+4"
	},
	"skill": {
		"insight": "+6",
		"medicine": "+6",
		"persuasion": "+4"
	},
	"trait": [
		{
			"name": "Fey Ancestry",
			"entries": [
				"Sylvia has advantage on saving throws against being {@condition charmed}, and magic can't put her to sleep."
			]
		},
		{
			"name": "Disciple of Life",
			"entries": [
				"Whenever Sylvia uses a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Channel Divinity: Preserve Life (1/Short or Long Rest)",
			"entries": [
				"As an action, Sylvia presents her holy symbol and uses her Channel Divinity. She chooses any creatures within 30 feet of her, and divides 40 hit points among them. This feature can't restore a creature to more than half of its hit point maximum."
			]
		}
	],
	"traitTags": [
		"Fey Ancestry"
	],
	"spellcasting": [
		{
			"name": "Spellcasting",
			"headerEntries": [
				"Sylvia is an 8th-level spellcaster. Her spellcasting ability is Wisdom (spell save {@dc 15}, +7 to hit with spell attacks). She has the following cleric spells prepared:"
			],
			"spells": {
				"0": {
					"spells": [
						"{@spell guidance|XPHB}",
						"{@spell light|XPHB}",
						"{@spell sacred flame|XPHB}",
						"{@spell thaumaturgy|XPHB}"
					]
				},
				"1": {
					"spells": [
						"{@spell bless|XPHB}",
						"{@spell cure wounds|XPHB}",
						"{@spell guiding bolt|XPHB}",
						"{@spell shield of faith|XPHB}"
					],
					"slots": 4
				},
				"2": {
					"spells": [
						"{@spell aid|XPHB}",
						"{@spell hold person|XPHB}",
						"{@spell spiritual weapon|XPHB}"
					],
					"slots": 3
				},
				"3": {
					"spells": [
						"{@spell beacon of hope|XPHB}",
						"{@spell dispel magic|XPHB}",
						"{@spell spirit guardians|XPHB}"
					],
					"slots": 3
				},
				"4": {
					"spells": [
						"{@spell death ward|XPHB}",
						"{@spell guardian of faith|XPHB}"
					],
					"slots": 2
				}
			},
			"ability": "wis",
			"type": "spellcasting"
		}
	],
	"spellcastingTags": [
		"CC"
	],
	"action": [
		{
			"name": "Mace",
			"entries": [
				"{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d6 + 1}) bludgeoning damage."
			]
		}
	],
	"miscTags": [
		"MW",
		"MLW"
	],
	"attachedItems": [
		"mace|phb"
	],
	"fluff": {
		"entries": [
			"Sylvia Garnix adalah pendeta dari dewa cahaya atau kehidupan, dan istri tercinta Juval. Dulunya ia adalah pilar kebaikan dan harapan di Violet Carnival, membawa sukacita dan penyembuhan. Namun, kini ia terbelenggu oleh Belgruth, kekuatannya terkuras dan jiwanya terperangkap. Statblock ini menggambarkan kemampuannya sebelum ia disandra, atau saat ia berhasil diselamatkan dan mendapatkan kembali kekuatannya di tengah pertarungan."
		]
	},
	"damageTags": [
		"B"
	],
	"damageTagsSpell": [
		"N",
		"O",
		"R"
	],
	"savingThrowForcedSpell": [
		"dexterity",
		"wisdom"
	]
}
