export const HanannNemmonisMonster = {
	"name": "Hanann Nemmonis",
	"group": [
		"Chromatic Dragons"
	],
	"source": "MTW",
	"page": 329,
	"size": [
		"H"
	],
	"type": {
		"type": "dragon",
		"tags": [
			"chromatic"
		]
	},
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		18
	],
	"hp": {
		"average": 200,
		"formula": "16d12 + 96"
	},
	"speed": {
		"walk": 40,
		"burrow": 30,
		"fly": 80,
		"swim": 40
	},
	"initiative": {
		"proficiency": 2
	},
	"str": 22,
	"dex": 10,
	"con": 22,
	"int": 8,
	"wis": 12,
	"cha": 12,
	"save": {
		"dex": "+5",
		"wis": "+6"
	},
	"skill": {
		"perception": "+11",
		"stealth": "+5"
	},
	"senses": [
		"blindsight 60 ft.",
		"darkvision 120 ft."
	],
	"passive": 21,
	"immune": [
		"cold"
	],
	"languages": [
		"Common",
		"Draconic"
	],
	"cr": {
		"cr": "13",
		"xpLair": 11500
	},
	"spellcasting": [{
		"name": "Frightful Presence",
		"type": "spellcasting",
		"headerEntries": [
			"The dragon casts {@spell Fear|XPHB}, requiring no Material components and using Charisma as the spellcasting ability (spell save {@dc 14}). The dragon can't take this action again until the start of its next turn."
		],
		"legendary": {
			"1": [
				"{@spell Fear|XPHB}"
			]
		},
		"ability": "cha",
		"displayAs": "legendary",
		"hidden": [
			"legendary"
		]
	}],
	"trait": [{
			"name": "Ice Walk",
			"entries": [
				"The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, {@variantrule Difficult Terrain|XPHB} composed of ice or snow doesn't cost it extra movement."
			]
		},
		{
			"name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
			"entries": [
				"If the dragon fails a saving throw, it can choose to succeed instead."
			]
		}
	],
	"action": [{
			"name": "Multiattack",
			"entries": [
				"The dragon makes three Rend attacks."
			]
		},
		{
			"name": "Rend",
			"entries": [
				"{@atkr m} {@hit 11}, reach 10 ft. {@h}13 ({@damage 2d6 + 6}) Slashing damage plus 4 ({@damage 1d8}) Cold damage."
			]
		},
		{
			"name": "Cold Breath {@recharge 5}",
			"entries": [
				"{@actSave con} {@dc 19}, each creature in a 60-foot {@variantrule Cone [Area of Effect]|XPHB|Cone}. {@actSaveFail} 54 ({@damage 12d8}) Cold damage. {@actSaveSuccess} Half damage."
			]
		}
	],
	"legendaryActionsLair": 20,
	"legendary": [{
			"name": "Blizzard Veil",
			"entries": [
				"Icy wind fills the chamber. All non-dragons must succeed on a {@actSave con} {@dc 15} or be {@condition blinded} until the end of their next turn."
			]
		},
		{
			"name": "Shattering Ice",
			"entries": [
				"An icicle falls from the ceiling, targeting a random player ({@hit 10} to hit, {@damage 2d10} piercing + {@damage 2d10} cold damage)."
			]
		},
		{
			"name": "Frozen Shackles",
			"entries": [
				"Frost creeps up from the floor, restraining one random creature ({@actSave str} {@dc 16} to break)."
			]
		}
	],
	"legendaryGroup": {
		"name": "White Dragon",
		"source": "XMM"
	},
	"environment": [
		"arctic"
	],
	"treasure": [
		"arcana"
	],
	"dragonAge": "adult",
	"soundClip": {
		"type": "external",
		"url": "https://5e.tools/audio/bestiary/white-dragon.mp3"
	},
	"traitTags": [
		"Legendary Resistances"
	],
	"senseTags": [
		"B",
		"SD"
	],
	"actionTags": [
		"Breath Weapon",
		"Multiattack"
	],
	"languageTags": [
		"C",
		"DR"
	],
	"spellcastingTags": [
		"O"
	],
	"miscTags": [
		"MA",
		"RCH"
	],
	"conditionInflictSpell": [
		"frightened"
	],
	"hasFluff": true,
	"hasFluffImages": true,
	"token": {
		"name": "Adult White Dragon",
		"source": "XMM"
	},
	"fluff": {
		"name": "Adult White Dragon",
		"source": "XMM",
		"entries": [{
				"type": "section",
				"entries": [
					"Adult white dragons claim large territories and are often the mightiest predators in those lands. While some lurk in their lairs for months, others regularly soar over their domains. When they spot something moving on the ice, they might swoop down to feed or extort food and offerings from sapient creatures."
				]
			},
			{
				"type": "section",
				"name": "White Dragons",
				"entries": [
					"{@i Dragons of Cold and Cruelty}",
					{
						"type": "list",
						"style": "list-hang-notitle",
						"items": [{
								"type": "item",
								"name": "Habitat:",
								"entry": "{@filter Arctic|bestiary|environment=arctic}"
							},
							{
								"type": "item",
								"name": "Treasure:",
								"entry": "{@table Random Magic Items - Arcana|XDMG|Arcana}"
							}
						]
					},
					"Among the most primal chromatic dragons, white dragons prioritize survival over all. Life is harsh and uncertain in the arctic expanses, glacial heights, and frozen seas where these dragons dwell. White dragons fiercely protect their territories, scouring the frigid regions for food and evidence of trespassers. Most white dragons ignore the plots of smaller creatures and other dragons, concerning themselves only with their own survival.",
					"White dragons create lairs to defend themselves from other deadly arctic creatures and from dangerous natural conditions. Within these shelters, white dragons hoard testaments to their superiority, such as monstrous skulls, the gear of defeated rivals, and curiosities that capture their interest. To protect such treasure, white dragons coax ice to form over their hoards or sink their wealth in frigid pools. For white dragons, each piece of treasure embodies a victory—the details of which inflate as these dragons age.",
					{
						"type": "entries",
						"name": "White Dragon Lairs",
						"entries": [
							"White dragons brood in bitterly cold lairs clawed from stone and ice.",
							"The region containing an adult or ancient white dragon's lair is affected by its presence, creating the following effects:",
							{
								"type": "list",
								"style": "list-hang-notitle",
								"items": [{
										"type": "item",
										"name": "Frigid Cold",
										"entries": [
											"The area within 1 mile of the lair is an area of {@hazard extreme cold|XDMG}. Any water in that area is {@hazard frigid water|XDMG}. See the {@book Dungeon Master's Guide|DMG} for rules on extreme cold and frigid water."
										]
									},
									{
										"type": "item",
										"name": "Glacial Gloom",
										"entries": [
											"The area within 1 mile of the lair is {@variantrule Lightly Obscured|XPHB} by chilly fog. Whenever a creature other than the dragon or one of its allies finishes a {@variantrule Long Rest|XPHB} in that area, that creature must succeed on a {@dc 15} Constitution saving throw or have its {@variantrule Speed|XPHB} reduced by 10 feet for 1 hour."
										]
									}
								]
							},
							"If the dragon dies or moves its lair elsewhere, these effects end immediately."
						]
					}
				]
			}
		],
		"images": [{
			"type": "image",
			"href": {
				"type": "internal",
				"path": "bestiary/XMM/White Dragon.webp"
			},
			"title": "An adult white dragon views all creatures in its territory as prey",
			"credit": "Vance Kovacs"
		}]
	},
	"shortName": "Hanann",
	"isNamedCreature": true,
	"damageTags": [
		"C",
		"S"
	],
	"savingThrowForced": [
		"constitution",
		"strength"
	],
	"savingThrowForcedSpell": [
		"wisdom"
	],
	"savingThrowForcedLegendary": [
		"constitution"
	]
}
