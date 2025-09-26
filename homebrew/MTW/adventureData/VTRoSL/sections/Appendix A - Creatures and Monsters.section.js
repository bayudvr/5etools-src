export const AppendixACreaturesandMonsters = {
	"type": "section",
	"name": "Creatures & Monsters",
	"entries": [
		{
			"type": "statblockInline",
			"style": "inset",
			"dataType": "deity",
			"data": {
				"name": "Vaeil",
				"source": "MTW",
				"page": 1,
				"id": "Vaeil",
				"alignment": [
					"L",
					"G"
				],
				"domains": [
					"Time",
					"Order",
					"Creation"
				],
				"pantheon": "The Primordials",
				"titles": [
					"The God of Time",
					"The Grand Architect",
					"The Eternal Guardian"
				],
				"symbol": "A serene, all-seeing eye within a perfect clock, surrounded by the Ouroboros.",
				"entries": [
					"{@deity Vaeil|The Primordials|MTW} is the benevolent deity who brought order from primordial chaos and established the flow of time. He is the guardian of the timeline, ensuring that the grand design of the cosmos unfolds as it should.",
					"While {@deity Vaeil|The Primordials|MTW} is often seen as a distant and impassive force, his influence is felt in the cycles of the seasons, the turning of the stars, and the natural progression of life and death. His followers, such as the {@creature Acolyte of Silver Light|MTW-VS}, strive to maintain order, preserve knowledge, and protect the world from the disruptive influence of chaotic forces.",
					"{@deity Vaeil|The Primordials|MTW}'s power is not one of direct intervention, but of subtle guidance and correction. He acts through his devoted followers to restore balance and mend the tears in the fabric of reality caused by beings like {@creature Xy'loth, the Archdemon|MTW|Xyloth}. His greatest triumph was the ending of the {@adventure War of Sundering|MTW|war-of-sundering}, which he accomplished by resetting time, an act that fractured a part of his soul, creating the entity known as {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra}."
				]
			}
		},
		{
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "Vaeil, The God of Time",
				"source": "MTW",
				"page": 1,
				"size": [
					"G"
				],
				"type": "celestial",
				"alignment": [
					"L",
					"G"
				],
				"ac": [
					24
				],
				"hp": {
					"average": 500,
					"formula": "25d20 + 250"
				},
				"speed": {
					"walk": 60,
					"fly": 120
				},
				"str": 20,
				"dex": 20,
				"con": 30,
				"int": 30,
				"wis": 30,
				"cha": 30,
				"save": {
					"int": "+18",
					"wis": "+18",
					"cha": "+18"
				},
				"skill": {
					"arcana": "+18",
					"history": "+18",
					"insight": "+18"
				},
				"immune": [
					"radiant",
					"force",
					"psychic",
					"bludgeoning, piercing, slashing from nonmagical attacks"
				],
				"conditionImmune": [],
				"senses": [
					"truesight 120 ft."
				],
				"languages": [],
				"cr": "25",
				"legendary": [{
						"name": "Detect",
						"entries": [
							"Vaeil makes a Wisdom (Perception) check."
						]
					},
					{
						"name": "Chronal Shift (Costs 2 Actions)",
						"entries": [
							"Vaeil can reroll a saving throw it just failed. It must use the new roll. This can be used to counter an effect that would reduce its Legendary Resistance."
						]
					},
					{
						"name": "Divine Strike (Costs 3 Actions)",
						"entries": [
							"Vaeil makes one melee weapon attack. On a hit, the target takes an additional 27 ({@damage 5d10}) radiant damage."
						]
					}
				],
				"legendaryGroup": {
					"name": "Vaeil, The God of Time",
					"source": "MTW"
				},
				"trait": [{
						"name": "Innate Spellcasting",
						"entries": [
							"Vaeil's spellcasting ability is Wisdom (spell save {@dc 26}). He can innately cast the following spells, requiring no material components:",
							"At will: {@spell command}, {@spell time ravage|MTW}",
							"3/day each: {@spell banishment}, {@spell divine word}",
							"1/day each: {@spell foresight}, {@spell prismatic wall}"
						]
					},
					{
						"name": "Legendary Resistance (5/Day)",
						"entries": [
							"If Vaeil fails a saving throw, he can choose to succeed instead."
						]
					},
					{
						"name": "Time Reversal",
						"entries": [
							"If Vaeil would be reduced to 0 hit points, his current hit point total instead resets to 400 hit points, he recharges all his abilities, and he regains any expended uses of Legendary Resistance."
						]
					}
				],
				"action": [{
						"name": "Multiattack",
						"entries": [
							"Vaeil makes two melee attacks with its radiant fists."
						]
					},
					{
						"name": "Radiant Fist",
						"entries": [
							"{@atk mw} {@hit 12} to hit, reach 15 ft., one target. Hit: 15 ({@damage 2d8 + 6}) bludgeoning damage plus 18 ({@damage 4d8}) radiant damage."
						]
					},
					{
						"name": "Temporal Warp",
						"recharge": [
							5,
							6
						],
						"entries": [
							"Vaeil chooses a point within 120 feet of him. A 30-foot-radius sphere centered on that point becomes a zone of temporal distortion until the start of his next turn. Each creature in that area must make a {@dc 26} Wisdom saving throw. On a failed save, the creature's speed is halved, and it can't take reactions. On a successful save, the creature's speed is halved. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
						]
					}
				],
				"languageTags": [
					"C",
					"A"
				],
				"damageTags": [
					"R",
					"F",
					"P",
					"B",
					"I",
					"S",
					"N"
				],
				"miscTags": [
					"MW",
					"RD",
					"W"
				]
			}
		},
		{
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
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
				"trait": [{
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
				"action": [{
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
				"legendary": [{
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
		},
		{
			"type": "statblockInline",
			"style": "inset",
			"dataType": "deity",
			"data": {
				"name": "Xy'loth",
				"source": "MTW",
				"alignment": [
					"C",
					"E"
				],
				"domains": [
					"Corruption",
					"Chaos",
					"Ruin"
				],
				"pantheon": "Demon Lords",
				"titles": [
					"The Great Disruptor",
					"The Weaver of Lies",
					"The Maw of Entropy"
				],
				"symbol": "A stylized serpent intertwined with a shattered clock, its head poised to strike the center.",
				"entries": [
					"{@creature Xy'loth, the Archdemon|MTW|Xyloth} is the primordial chaos that exists outside of time. It is not a being of flesh and blood but a malevolent force that seeks to unravel the orderly fabric of the multiverse, which was woven by {@deity Vaeil|The Primordials|MTW}.",
					"Unlike other demons who seek power or conquest, {@creature Xy'loth, the Archdemon|MTW|Xyloth}'s sole purpose is the ultimate unmaking of all things, returning them to the chaotic void from which it came. Its influence is insidious, working through whispers and subversion rather than brute force.",
					"{@creature Xy'loth, the Archdemon|MTW|Xyloth} is the master of lies, twisting the faith of mortals, and turning order against itself. The {@creature Acolyte of Silver Light|MTW-VS} in your adventure secretly worships {@creature Xy'loth, the Archdemon|MTW|Xyloth}, seeing its chaotic nature as true freedom from the gods' strictures. They believe that by bringing about the \"{@adventure Ruin of Silver Light|MTW-VS|ruin-of-silver-light},\" they are paving the way for {@creature Xy'loth, the Archdemon|MTW|Xyloth}'s ultimate victory and the final liberation of all creation into pure chaos."
				]
			}
		},
		{
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "Xy'loth, the Archdemon",
				"source": "MTW",
				"page": 1,
				"size": [
					"G"
				],
				"type": "fiend",
				"alignment": [
					"C",
					"E"
				],
				"ac": [
					22
				],
				"hp": {
					"average": 400,
					"formula": "20d20 + 200"
				},
				"speed": {
					"walk": 50,
					"fly": 80
				},
				"str": 26,
				"dex": 16,
				"con": 28,
				"int": 20,
				"wis": 24,
				"cha": 26,
				"save": {
					"str": "+14",
					"con": "+15",
					"cha": "+14"
				},
				"skill": {
					"intimidation": "+14",
					"deception": "+14"
				},
				"immune": [
					"fire",
					"necrotic",
					"psychic",
					"bludgeoning, piercing, slashing from nonmagical attacks"
				],
				"conditionImmune": [
					"charmed",
					"exhaustion",
					"frightened",
					"paralyzed",
					"poisoned",
					"unconscious"
				],
				"senses": [
					"truesight 120 ft."
				],
				"languages": [
					"Abyssal",
					"telepathy 120 ft."
				],
				"cr": "20",
				"legendary": [{
						"name": "Shattering Strike (Costs 2 Actions)",
						"entries": [
							"Xy'loth makes one melee weapon attack. On a hit, the target must make a {@dc 22} Constitution saving throw or have one nonmagical item it is carrying destroyed."
						]
					},
					{
						"name": "Corrupting Gaze (Costs 1 Action)",
						"entries": [
							"Xy'loth targets one creature he can see within 60 feet of him. The target must succeed on a {@dc 22} Wisdom saving throw or take 22 ({@damage 4d10}) psychic damage and become poisoned until the end of its next turn."
						]
					}
				],
				"legendaryGroup": {
					"name": "Xy'loth, the Archdemon",
					"source": "MTW"
				},
				"trait": [{
						"name": "Chaotic Aura",
						"entries": [
							"Any creature that starts its turn within 10 feet of Xy'loth must succeed on a {@dc 20} Charisma saving throw or become confused for 1 minute. A confused creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. While confused, a creature can't take reactions and must roll a {@dice d10} at the start of each of its turns to determine its behavior. On a 1-4, it does nothing. On a 5-6, it makes a melee attack against a random target. On a 7-8, it makes a ranged attack against a random target. On a 9-10, it does nothing."
						]
					},
					{
						"name": "Legendary Resistance (4/Day)",
						"entries": [
							"If Xy'loth fails a saving throw, he can choose to succeed instead."
						]
					}
				],
				"action": [{
						"name": "Multiattack",
						"entries": [
							"Xy'loth makes three melee attacks: one with its bite and two with its claws."
						]
					},
					{
						"name": "Bite",
						"entries": [
							"{@atk mw} {@hit 14} to hit, reach 15 ft., one target. Hit: 19 ({@damage 2d10 + 8}) piercing damage plus 18 ({@damage 4d8}) psychic damage."
						]
					},
					{
						"name": "Claw",
						"entries": [
							"{@atk mw} {@hit 14} to hit, reach 10 ft., one target. Hit: 15 ({@damage 2d6 + 8}) slashing damage plus 9 ({@damage 2d8}) necrotic damage."
						]
					}
				],
				"languageTags": [
					"A"
				],
				"damageTags": [
					"P",
					"B",
					"S",
					"N"
				],
				"miscTags": [
					"MW",
					"RD",
					"W"
				]
			}
		},
		{
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "Diane Serpent",
				"source": "MTW-VS",
				"size": [
					"M"
				],
				"type": "humanoid",
				"alignment": [
					"L",
					"G"
				],
				"ac": [
					18
				],
				"hp": {
					"average": 180,
					"formula": "15d10 + 90"
				},
				"speed": {
					"walk": 30
				},
				"str": 20,
				"dex": 12,
				"con": 20,
				"int": 10,
				"wis": 14,
				"cha": 12,
				"save": {
					"str": "+10",
					"con": "+10"
				},
				"skill": {
					"athletics": "+10",
					"intimidation": "+5"
				},
				"languages": [
					"Common",
					"Dwarvish"
				],
				"cr": "10",
				"trait": [{
						"name": "Action Surge",
						"entries": [
							"Diane can take one additional action on her turn. Once she uses this feature, she must finish a short or long rest before she can use it again."
						]
					},
					{
						"name": "Second Wind",
						"entries": [
							"On her turn, Diane can use a bonus action to regain {@dice 1d10 + 15} hit points. Once she uses this feature, she must finish a short or long rest before she can use it again."
						]
					},
					{
						"name": "Indomitable (2/Day)",
						"entries": [
							"Diane can re-roll a saving throw that she fails. She must use the new roll."
						]
					},
					{
						"name": "Weapon Master",
						"entries": [
							"Diane's heavy hammer is a formidable weapon. She has a +2 bonus to attack rolls with her warhammer (included in the statblock)."
						]
					}
				],
				"action": [{
						"name": "Multiattack",
						"entries": [
							"Diane makes three melee attacks with her warhammer."
						]
					},
					{
						"name": "Warhammer (Two-Handed)",
						"entries": [
							"{@atk mw} {@hit 12} to hit, reach 5 ft., one target. Hit: 12 ({@dice 2d6 + 5}) bludgeoning damage."
						]
					}
				],
				"conditionImmune": [
					"exhaustion"
				]
			}
		}, {
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "Demolias Nogard",
				"source": "MTW-VS",
				"size": [
					"M"
				],
				"type": "humanoid",
				"alignment": [
					"L",
					"G"
				],
				"ac": [
					18
				],
				"hp": {
					"average": 140,
					"formula": "15d10 + 60"
				},
				"speed": {
					"walk": 30
				},
				"str": 16,
				"dex": 12,
				"con": 18,
				"int": 10,
				"wis": 14,
				"cha": 20,
				"save": {
					"wis": "+7",
					"cha": "+9"
				},
				"skill": {
					"persuasion": "+9",
					"insight": "+7"
				},
				"languages": [
					"Common",
					"Elvish",
					"Celestial"
				],
				"cr": "10",
				"spellcasting": [{
					"name": "Spellcasting",
					"headerEntries": [
						"Demolias is a 15th-level spellcaster. His spellcasting ability is Charisma (spell save {@dc 17}). He has the following paladin spells prepared:"
					],
					"spells": {
						"1": {
							"slots": 4,
							"spells": [
								"bless",
								"compelled duel",
								"divine favor"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"find steed",
								"magic weapon"
							]
						},
						"3": {
							"slots": 3,
							"spells": [
								"daylight",
								"revivify"
							]
						},
						"4": {
							"slots": 2,
							"spells": [
								"aura of life",
								"death ward"
							]
						}
					},
					"type": "spellcasting"
				}],
				"trait": [{
					"name": "Aura of Protection",
					"entries": [
						"Whenever Demolias or a friendly creature within 10 feet of him must make a saving throw, that creature gains a +5 bonus to the saving throw (included in the statblock)."
					]
				}],
				"action": [{
						"name": "Multiattack",
						"entries": [
							"Demolias makes two melee attacks with his shortsword."
						]
					},
					{
						"name": "Shortsword",
						"entries": [
							"{@atk mw} {@hit 9} to hit, reach 5 ft., one target. Hit: {@dice 1d6 + 3} piercing damage."
						]
					},
					{
						"name": "Divine Smite",
						"entries": [
							"When Demolias hits with a melee weapon attack, he can expend a spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is {@dice 2d8} for a 1st-level spell slot, plus {@dice 1d8} for each spell level higher than 1st, to a maximum of {@dice 5d8}."
						]
					}
				],
				"conditionImmune": [
					"charmed",
					"frightened"
				]
			}
		}, {
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "The Abyssal Maw",
				"source": "MTW-VS",
				"page": 1,
				"size": [
					"L"
				],
				"type": "aberration",
				"alignment": [
					"C",
					"E"
				],
				"ac": [
					16
				],
				"hp": {
					"average": 112,
					"formula": "14d10+35"
				},
				"speed": {
					"walk": 40
				},
				"str": 19,
				"dex": 13,
				"con": 16,
				"int": 3,
				"wis": 11,
				"cha": 6,
				"resist": [
					"cold",
					"psychic"
				],
				"senses": [
					"darkvision 60 ft."
				],
				"languages": [
					"understands Abyssal but can't speak"
				],
				"cr": "5",
				"action": [{
						"name": "Multiattack",
						"entries": [
							"The Maw makes two attacks: one with its Bite and one with its Claw."
						]
					},
					{
						"name": "Bite",
						"entries": [
							"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. Hit: 13 ({@damage 2d8 + 4}) piercing damage plus 5 ({@damage 1d10}) psychic damage. The target must succeed on a {@dc 15} Wisdom saving throw or become Frightened of the Maw until the end of its next turn."
						]
					},
					{
						"name": "Claw",
						"entries": [
							"{@atk mw} {@hit 7} to hit, reach 5 ft., one target. Hit: 11 ({@damage 2d6 + 4}) slashing damage. If the target is a creature, it must succeed on a {@dc 15} Strength saving throw or be grappled (escape DC 15)."
						]
					}
				],
				"trait": [{
					"name": "Festering Feast",
					"entries": [
						"The Abyssal Maw regains 10 hit points at the start of its turn if it is in an area of corruption or within 5 feet of a grappled or frightened creature."
					]
				}],
				"conditionImmune": [
					"charmed",
					"frightened",
					"exhaustion"
				]
			}
		}, {
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "Acolyte of Silver Light",
				"source": "MTW-VS",
				"page": 1,
				"size": [
					"M"
				],
				"type": "humanoid",
				"alignment": [
					"C",
					"E"
				],
				"ac": [
					11
				],
				"hp": {
					"average": 18,
					"formula": "4d8"
				},
				"speed": {
					"walk": 30
				},
				"str": 10,
				"dex": 12,
				"con": 10,
				"int": 10,
				"wis": 13,
				"cha": 11,
				"skill": {
					"religion": "+3"
				},
				"languages": [
					"Common",
					"Undercommon"
				],
				"cr": "1/4",
				"spellcasting": [{
					"name": "Spellcasting",
					"headerEntries": [
						"The acolyte is a 1st-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 11}, {@hit 3} to hit with spell attacks). He has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"sacred flame"
							]
						},
						"1": {
							"slots": 2,
							"spells": [
								"bane",
								"command"
							]
						}
					},
					"type": "spellcasting"
				}],
				"action": [{
					"name": "Dagger",
					"entries": [
						"{@atk mw} {@hit 3}, reach 5 ft., one target. Hit: 3 ({@damage 1d4 + 1}) piercing damage."
					]
				}],
				"conditionImmune": []
			}
		}, {
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "Priest of Silver Light",
				"source": "MTW-VS",
				"page": 1,
				"size": [
					"M"
				],
				"type": "humanoid",
				"alignment": [
					"C",
					"E"
				],
				"ac": [
					13
				],
				"hp": {
					"average": 38,
					"formula": "7d8 + 7"
				},
				"speed": {
					"walk": 30
				},
				"str": 10,
				"dex": 10,
				"con": 12,
				"int": 13,
				"wis": 16,
				"cha": 13,
				"save": {
					"wis": "+5",
					"cha": "+3"
				},
				"skill": {
					"religion": "+3"
				},
				"languages": [
					"Common",
					"Undercommon"
				],
				"cr": "2",
				"spellcasting": [{
					"name": "Spellcasting",
					"headerEntries": [
						"The priest is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 13}, {@hit 5} to hit with spell attacks). He has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"guidance",
								"sacred flame",
								"thaumaturgy"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"bane",
								"command"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"hold person",
								"inflict wounds"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"bestow curse"
							]
						}
					},
					"type": "spellcasting"
				}],
				"action": [{
						"name": "Multiattack",
						"entries": [
							"The priest makes two melee attacks."
						]
					},
					{
						"name": "Dagger",
						"entries": [
							"{@atk mw} {@hit 2}, reach 5 ft., one target. Hit: 3 ({@damage 1d4 + 1}) piercing damage."
						]
					}
				],
				"conditionImmune": []
			}
		}, {
			"type": "statblockInline",
			"style": "inset",
			"dataType": "monster",
			"data": {
				"name": "High Priest of Silver Light",
				"source": "MTW-VS",
				"page": 1,
				"size": [
					"M"
				],
				"type": "humanoid",
				"alignment": [
					"C",
					"E"
				],
				"ac": [
					14
				],
				"hp": {
					"average": 52,
					"formula": "8d8 + 16"
				},
				"speed": {
					"walk": 30
				},
				"str": 10,
				"dex": 14,
				"con": 14,
				"int": 13,
				"wis": 17,
				"cha": 15,
				"save": {
					"wis": "+5",
					"cha": "+4"
				},
				"skill": {
					"deception": "+4",
					"intimidation": "+4"
				},
				"languages": [
					"Common",
					"Undercommon",
					"Abyssal"
				],
				"cr": "4",
				"spellcasting": [{
					"name": "Spellcasting",
					"headerEntries": [
						"The High Priest is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell save {@dc 15}, {@hit 7} to hit with spell attacks). He has the following cleric spells prepared:"
					],
					"spells": {
						"0": {
							"spells": [
								"guidance",
								"sacred flame",
								"thaumaturgy"
							]
						},
						"1": {
							"slots": 4,
							"spells": [
								"bane",
								"command",
								"guiding bolt"
							]
						},
						"2": {
							"slots": 3,
							"spells": [
								"hold person",
								"inflict wounds"
							]
						},
						"3": {
							"slots": 2,
							"spells": [
								"bestow curse",
								"vampiric touch"
							]
						}
					},
					"type": "spellcasting"
				}],
				"trait": [{
						"name": "Fey Ancestry",
						"entries": [
							"The High Priest has advantage on saving throws against being charmed, and magic can't put him to sleep."
						]
					},
					{
						"name": "Sunlight Sensitivity",
						"entries": [
							"While in sunlight, the High Priest has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
						]
					}
				],
				"action": [{
						"name": "Multiattack",
						"entries": [
							"The High Priest makes two melee attacks."
						]
					},
					{
						"name": "Dagger",
						"entries": [
							"{@atk mw} {@hit 4}, reach 5 ft., one target. Hit: 4 ({@damage 1d4 + 2}) piercing damage."
						]
					}
				],
				"environment": [
					"underdark"
				],
				"soundClip": {
					"type": "internal",
					"path": "bestiary/high-priest-of-silver-light.mp3"
				},
				"languageTags": [
					"C",
					"UA",
					"A"
				],
				"damageTags": [
					"N",
					"P"
				],
				"miscTags": [
					"MW"
				],
				"conditionImmune": []
			}
		}
	]
}
