export const RenataNPC = {
	"name": "Renata",
	"source": "MTW-VS",
	"page": 1,
	"size": [
		"M"
	],
	"type": {
		"type": "humanoid",
		"note": "Human"
	},
	"alignment": [
		"N"
	],
	"ac": [
		13
	],
	"hp": {
		"average": 16,
		"formula": "3d8 + 3"
	},
	"speed": {
		"walk": 30
	},
	"str": 11,
	"dex": 14,
	"con": 12,
	"int": 11,
	"wis": 13,
	"cha": 11,
	"skill": {
		"nature": "+4",
		"perception": "+5",
		"stealth": "+6",
		"survival": "+5",
		"persuasion": "+2",
		"insight": "+3"
	},
	"passive": 15,
	"languages": [
		"Common plus one other language"
	],
	"cr": "1/2",
	"gear": [
		"leather armor|xphb",
		"longbow|xphb",
		"shortsword|xphb"
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The scout makes two attacks, using Shortsword and Longbow in any combination."
			]
		},
		{
			"name": "Shortsword",
			"entries": [
				"{@atkr m} {@hit 4}, reach 5 ft. {@h}5 ({@damage 1d6 + 2}) Piercing damage."
			]
		},
		{
			"name": "Longbow",
			"entries": [
				"{@atkr r} {@hit 4}, range 150/600 ft. {@h}6 ({@damage 1d8 + 2}) Piercing damage."
			]
		}
	],
	"environment": [
		"any"
	],
	"treasure": [
		"implements",
		"individual"
	],
	"soundClip": {
		"type": "external",
		"url": "http://127.0.0.1:5050/audio/bestiary/scout.mp3"
	},
	"actionTags": [
		"Multiattack"
	],
	"languageTags": [
		"C",
		"X"
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
		"name": "Scout",
		"source": "XMM"
	},
	"fluff": {
		"name": "Scout",
		"source": "XMM",
		"entries": [
			{
				"type": "section",
				"entries": [
					"Scouts are keen archers and acutely aware of their surroundings. They often know several regions particularly well and are familiar with local creatures, landmarks, and perils."
				]
			},
			{
				"type": "section",
				"name": "Scouts",
				"entries": [
					"{@i Watchers and Wanderers}",
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
								"entry": "{@table Random Magic Items - Implements|XDMG|Implements}, Individual"
							}
						]
					},
					"Scouts are warriors of the wilderness, trained in hunting and tracking. They might be explorers or trappers, or they could perform more martial roles as archers, bounty hunters, or outriders."
				]
			}
		],
		"images": [
			{
				"type": "image",
				"href": {
					"type": "internal",
					"path": "bestiary/XMM/Scouts.webp"
				},
				"credit": "Riccardo Moscatello"
			}
		]
	},
	"attachedItems": [
		"longbow|phb",
		"shortsword|phb"
	],
	"shortName": "Renata",
	"isNpc": true,
	"spellcasting": [
		{
			"name": "Spellcasting",
			"rest": {
				"1": [
					"{@spell guidance|XPHB}"
				]
			},
			"type": "spellcasting"
		}
	],
	"spellcastingTags": [
		"O"
	],
	"damageTags": [
		"P"
	]
}
