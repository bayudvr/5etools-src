export const KaelenNpc = {
	"name": "Kaelen, The First Mate",
	"source": "MTW-VS",
	"page": 1,
	"size": [
		"S",
		"M"
	],
	"type": "humanoid",
	"alignment": [
		"N"
	],
	"ac": [
		12
	],
	"hp": {
		"average": 11,
		"formula": "2d8 + 2"
	},
	"speed": {
		"walk": 30
	},
	"str": 11,
	"dex": 12,
	"con": 12,
	"int": 10,
	"wis": 10,
	"cha": 10,
	"passive": 10,
	"languages": [
		"Common",
		"Thieves' cant"
	],
	"cr": "1/8",
	"gear": [
		"leather armor|xphb",
		"light crossbow|xphb",
		"scimitar|xphb"
	],
	"action": [
		{
			"name": "Scimitar",
			"entries": [
				"{@atkr m} {@hit 3}, reach 5 ft. {@h}4 ({@damage 1d6 + 1}) Slashing damage."
			]
		},
		{
			"name": "Light Crossbow",
			"entries": [
				"{@atkr r} {@hit 3}, range 80/320 ft. {@h}5 ({@damage 1d8 + 1}) Piercing damage."
			]
		}
	],
	"environment": [
		"any"
	],
	"treasure": [
		"any"
	],
	"soundClip": {
		"type": "external",
		"url": "https://5e.tools/audio/bestiary/bandit.mp3"
	},
	"languageTags": [
		"C",
		"TC"
	],
	"miscTags": [
		"MA",
		"MLW",
		"RA",
		"RNG"
	],
	"hasFluff": true,
	"hasFluffImages": true,
	"token": {
		"name": "Bandit",
		"source": "XMM"
	},
	"fluff": {
		"name": "Bandit",
		"source": "XMM",
		"entries": [
			{
				"type": "section",
				"entries": [
					"Bandits are inexperienced ne'er-do-wells who typically follow the orders of higher-ranking bandits."
				]
			},
			{
				"type": "section",
				"name": "Bandits",
				"entries": [
					"{@i Criminals and Scoundrels}",
					{
						"type": "list",
						"style": "list-hang-notitle",
						"items": [
							{
								"type": "item",
								"name": "Habitat:",
								"entry": "{@filter Any|bestiary|environment=any}"
							},
							{
								"type": "item",
								"name": "Treasure:",
								"entry": "Any"
							}
						]
					},
					"Bandits use the threat of violence to take what they want. Such criminals include gang members, desperadoes, and lawless mercenaries. Yet not all bandits are motivated by greed. Some are driven to lives of crime by unjust laws, desperation, or the threats of merciless leaders.",
					"Roll on or choose a result from the Bandit Motivations table to determine the circumstances behind a bandit's crimes.",
					{
						"type": "insetReadaloud",
						"entries": [
							{
								"type": "quote",
								"entries": [
									"I am he who rules the world, don't you know? One little piece at a time."
								],
								"by": "Jarlaxle"
							}
						]
					},
					{
						"type": "table",
						"caption": "Bandit Motivations",
						"colLabels": [
							"1d6",
							"The Bandit..."
						],
						"colStyles": [
							"col-2 text-center",
							"col-10"
						],
						"rows": [
							[
								"1",
								"Fights only oppressors."
							],
							[
								"2",
								"Is an ex-soldier who was discarded by their nation and now takes what they were promised."
							],
							[
								"3",
								"Is in a gang that views nonmembers as foes."
							],
							[
								"4",
								"Hesitantly serves a villainous leader."
							],
							[
								"5",
								"Secretly works for a government or a regional ruler to sow chaos."
							],
							[
								"6",
								"Takes what they need to survive."
							]
						]
					}
				]
			}
		],
		"images": [
			{
				"type": "image",
				"href": {
					"type": "internal",
					"path": "bestiary/XMM/Bandits.webp"
				},
				"credit": "Katerina Ladon"
			}
		]
	},
	"attachedItems": [
		"light crossbow|phb",
		"scimitar|phb"
	],
	"shortName": "Kaelen",
	"skill": {
		"intimidation": "+2"
	},
	"isNpc": true,
	"damageTags": [
		"P",
		"S"
	]
}
