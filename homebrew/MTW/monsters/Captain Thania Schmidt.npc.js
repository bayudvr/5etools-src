export const ThaniaSchmidtNPC = {
	"name": "Thania Schmidt",
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
		15
	],
	"hp": {
		"average": 52,
		"formula": "8d8 + 16"
	},
	"speed": {
		"walk": 30
	},
	"str": 15,
	"dex": 16,
	"con": 14,
	"int": 14,
	"wis": 18,
	"cha": 14,
	"save": {
		"str": "+4",
		"dex": "+5",
		"wis": "+2"
	},
	"skill": {
		"athletics": "+4",
		"deception": "+4"
	},
	"passive": 14,
	"languages": [
		"Common",
		"Thieves' cant"
	],
	"cr": "2",
	"gear": [
		"pistol|xphb",
		"scimitar|xphb",
		"studded leather armor|xphb"
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The bandit makes two attacks, using Scimitar and Pistol in any combination."
			]
		},
		{
			"name": "Scimitar",
			"entries": [
				"{@atkr m} {@hit 5}, reach 5 ft. {@h}6 ({@damage 1d6 + 3}) Slashing damage."
			]
		},
		{
			"name": "Pistol",
			"entries": [
				"{@atkr r} {@hit 5}, range 30/90 ft. {@h}8 ({@damage 1d10 + 3}) Piercing damage."
			]
		}
	],
	"reaction": [
		{
			"name": "Parry",
			"entries": [
				"{@actTrigger} The bandit is hit by a melee attack roll while holding a weapon. {@actResponse} The bandit adds 2 to its AC against that attack, possibly causing it to miss."
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
		"url": "http://127.0.0.1:5050/audio/bestiary/bandit-captain.mp3"
	},
	"actionTags": [
		"Multiattack",
		"Parry"
	],
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
		"name": "Bandit Captain",
		"source": "XMM"
	},
	"fluff": {
		"name": "Bandit Captain",
		"source": "XMM",
		"entries": [
			{
				"type": "section",
				"entries": [
					"Bandit captains command gangs of scoundrels and conduct straightforward heists. Others serve as guards and muscle for more influential criminals."
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
		"pistol|dmg",
		"scimitar|phb"
	],
	"isNpc": true,
	"damageTags": [
		"P",
		"S"
	]
}
