export const BelgruthMonster = {
	"name": "Belgruth, The Ravenous Maw",
	"size": [
		"L"
	],
	"type": {
		"type": "fiend",
		"note": "(demon)"
	},
	"source": "MTW-VS",
	"alignment": [
		"C",
		"E"
	],
	"ac": [
		{
			"ac": 17,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"formula": "20d10 + 110",
		"average": 220
	},
	"speed": {
		"walk": 40,
		"climb": 30
	},
	"str": 22,
	"dex": 10,
	"con": 24,
	"int": 14,
	"wis": 12,
	"cha": 20,
	"passive": 15,
	"cr": "10",
	"shortName": "Belgruth Demon",
	"senses": [
		"truesight 120 ft."
	],
	"senseTags": [
		"U"
	],
	"languages": [
		"Abyssal",
		"Common",
		"telepathy 120 ft"
	],
	"languageTags": [
		"AB",
		"C",
		"TP"
	],
	"save": {
		"str": "+10",
		"con": "+11",
		"wis": "+5",
		"cha": "+9"
	},
	"skill": {
		"intimidation": "+9",
		"perception": "+5",
		"athletics": "+10"
	},
	"resist": [
		"bludgeoning",
		"cold",
		"fire",
		"lightning",
		"piercing",
		"slashing",
		{
			"special": "Slashing from nonmagical attacks"
		}
	],
	"immune": [
		"poison"
	],
	"trait": [
		{
			"name": "Magic Resistance",
			"entries": [
				"The belgruth demon has advantage on saving throws against spells and other magical effects."
			]
		},
		{
			"name": "Aura of Despair (30 ft. radius)",
			"entries": [
				"Any hostile creature that starts its turn in this aura must make a {@dc 17} Wisdom saving throw. On a failed save, the creature is {@condition frightened} until the start of its next turn. If a creature's saving throw is successful, the creature is immune to Belgruth's Aura of Despair for the next 24 hours."
			]
		},
		{
			"name": "Devouring Maw",
			"entries": [
				"Belgruth's attacks deal an extra 3 ({@damage 1d6}) psychic damage if the target is {@condition frightened}"
			]
		},
		{
			"name": "Legendary Resistance (2/Day)",
			"entries": [
				"If the belgruth demon fails a saving throw, it can choose to succeed instead."
			]
		},
		{
			"name": "Soul Consumption",
			"entries": [
				"When a humanoid within 30 feet of Belgruth is reduced to 0 hit points, Belgruth gains 20 temporary hit points"
			]
		}
	],
	"traitTags": [
		"Legendary Resistances",
		"Magic Resistance"
	],
	"conditionInflict": [
		"blinded",
		"frightened",
		"grappled",
		"restrained"
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"Belgruth makes three attacks: one with his Claws, one with his Tongue Lash, and one with his Gnashing Bite."
			]
		},
		{
			"name": "Claw",
			"entries": [
				"{@atk mw} {@hit 10} to hit, reach 10 ft., one target. {@h}15 ({@damage 2d8 + 6}) slashing damage."
			]
		},
		{
			"name": "Tongue Lash",
			"entries": [
				"{@atk mw} {@hit 10} to hit, reach 15 ft., one target. {@h}13 ({@damage 2d6 + 6}) bludgeoning damage plus 7 ({@damage 2d6}) acid damage. If the target is a Large or smaller creature, it is {@condition grappled} (escape {@dc 18}). Until this grapple ends, Belgruth can't use his Tongue Lash on another target."
			]
		},
		{
			"name": "Gnashing Bite",
			"entries": [
				"{@hit 10} to hit, reach 5 ft., one {@condition grappled} creature. {@h}19 ({@damage 3d8 + 6}) piercing damage plus 10 ({@damage 3d6}) psychic damage. If this damage reduces the target to 0 hit points, the target is swallowed. While swallowed, the creature is {@condition blinded} and {@condition restrained}, it has total cover against attacks and other effects outside Belgruth, and it takes 10 ({@damage 3d6}) acid damage at the start of each of Belgruth's turns. If Belgruth takes 30 or more damage on a single turn from a creature inside it, Belgruth must succeed on a {@dc 15} Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall {@condition prone} in a space next to Belgruth. If Belgruth dies, a swallowed creature is no longer {@condition restrained} by him and can escape from the corpse using 15 feet of movement, exiting {@condition prone}."
			]
		},
		{
			"name": "Belly Burst {@recharge 4}",
			"entries": [
				"Belgruth violently convulses, causing spectral figures to burst from his translucent belly in a 20-foot radius sphere centered on him. Each creature in that area must make a {@dc 17} Dexterity saving throw. On a failed save, a creature takes 28 ({@damage 8d6}) psychic damage and is pushed 10 feet away. On a successful save, a creature takes half as much damage and isn't pushed."
			]
		}
	],
	"actionTags": [
		"Multiattack",
		"Swallow"
	],
	"miscTags": [
		"MW",
		"RCH",
		"AOE"
	],
	"legendary": [
		{
			"name": "Move",
			"entries": [
				"Belgruth moves up to his speed."
			]
		},
		{
			"name": "Slam",
			"entries": [
				"Belgruth makes one Claw attack."
			]
		},
		{
			"name": "Gorge",
			"entries": [
				"Belgruth uses his Gnashing Bite."
			]
		}
	],
	"damageTags": [
		"A",
		"B",
		"P",
		"S",
		"Y"
	],
	"savingThrowForced": [
		"constitution",
		"dexterity",
		"wisdom"
	]
}
