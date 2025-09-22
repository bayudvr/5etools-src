export const VaelithraFragmentofVaeilCreature = {
	"name": "Vaelithra, Fragment of Vaeil",
	"source": "MTW",
	"page": 1,
	"size": [
		"L"
	],
	"type": "celestial",
	"alignment": [
		"N",
		"G"
	],
	"ac": [
		21
	],
	"hp": {
		"average": 300,
		"formula": "24d10 + 168"
	},
	"speed": {
		"walk": 40,
		"fly": 60
	},
	"str": 22,
	"dex": 16,
	"con": 24,
	"int": 20,
	"wis": 22,
	"cha": 24,
	"save": {
		"wis": "+13",
		"cha": "+13",
		"con": "+12"
	},
	"skill": {
		"arcana": "+12",
		"history": "+12",
		"insight": "+13",
		"perception": "+13"
	},
	"immune": [
		"radiant",
		"psychic",
		"bludgeoning, piercing, slashing from nonmagical attacks"
	],
	"conditionImmune": [
		"charmed",
		"frightened",
		"paralyzed",
		"petrified"
	],
	"senses": [
		"truesight 60 ft."
	],
	"languages": [],
	"cr": "20",
	"trait": [
		{
			"name": "Change Shape",
			"entries": [
				"Vaelithra can use her action to polymorph into a Medium humanoid she has seen, or back into her true form. Her statistics, other than her size, are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.",
				"In her humanoid form, she appears as a striking but unassuming human woman with silver-streaked hair and eyes that occasionally flicker with an inner light. This form is her preferred way to interact with mortals, as it helps her remain inconspicuous while still maintaining an air of otherworldly grace."
			]
		},
		{
			"name": "Fragmented Divinity",
			"entries": [
				"As a shard of Vaeil, Vaelithra wields divine power but cannot fully control it. Whenever she rolls a natural 1 on an attack roll, saving throw, or ability check, time shatters momentarily. Each creature within 30 feet must succeed on a DC 20 Wisdom saving throw or become {@condition stunned} until the end of its next turn."
			]
		},
		{
			"name": "Innate Spellcasting",
			"entries": [
				"Vaelithra's spellcasting ability is Charisma spell save {@dc 21}. She can innately cast the following spells, requiring no material components:",
				"At will: {@spell hold person}, {@spell slow}, {@spell counterspell}",
				"3/day each: {@spell banishment}, {@spell greater restoration}, {@spell wall of force}",
				"1/day each: {@spell time stop}, {@spell foresight}"
			]
		},
		{
			"name": "Legendary Resistance (3/Day)",
			"entries": [
				"If Vaelithra fails a saving throw, she can choose to succeed instead."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Vaelithra makes two attacks with her Chronal Strike."
			]
		},
		{
			"name": "Chronal Strike",
			"entries": [
				"{@atk mw} {@hit +11} to hit, reach 10 ft., one target. Hit: 18 ({@damage 2d10 + 7}) force damage plus 13 ({@damage 3d8}) radiant damage. On a hit, the target must succeed on a DC 21 Wisdom saving throw or lose its reaction until the start of its next turn."
			]
		},
		{
			"name": "Temporal Distortion",
			"recharge": [
				5,
				6
			],
			"entries": [
				"Vaelithra bends the flow of time in a 20-foot-radius sphere centered on a point she can see within 120 feet. Each creature in that area must succeed on a DC 21 Wisdom saving throw or be either aged (disadvantage on Strength and Dexterity checks and saving throws) or slowed (as the {@spell slow} spell) for 1 minute. The effect ends early if Vaelithra loses concentration (as if concentrating on a spell)."
			]
		}
	],
	"legendary": [
		{
			"name": "Detect",
			"entries": [
				"Vaelithra makes a Wisdom (Perception) check."
			]
		},
		{
			"name": "Warp Step",
			"entries": [
				"Vaelithra teleports up to 30 feet to an unoccupied space she can see."
			]
		},
		{
			"name": "Chronal Glimpse (Costs 2 Actions)",
			"entries": [
				"Vaelithra forces a creature she can see within 30 feet to reroll an attack roll, saving throw, or ability check it just made. The creature must use the new roll."
			]
		}
	],
	"languageTags": [
		"C",
		"A"
	],
	"damageTags": [
		"R",
		"F"
	],
	"miscTags": [
		"MW",
		"RD",
		"W"
	]
}
