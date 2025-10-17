export const Chapter2Section = {
	"type": "section",
	"name": "Chapter 2 - The Journey and The Cold",
	"entries": [
		{
			"type": "section",
			"name": "Setting Sail",
			"entries": [
				{
					"type": "insetReadaloud",
					"entries": [
						"{@b Read-Aloud Text:}",
						"The {@b Glowing Gate} groans away from {@b Thundrum Port}, its weathered hull cutting into the turbulent waves. The noise of the city fades fast, replaced by the creak of timber and the snap of patched sails. The air, though still early in the day, has a brittle, chilling edge\u2014the first, subtle touch of the dragon's dominion. {@b Captain Thania Schmidt} gives you a single, grim nod. \"Forty-eight hours to Raijinsho,\" she says, her voice hard. \"If the cold doesn't kill you, my crew might.\""
					]
				},
				"The voyage to {@b Raijinsho Island} is a two-day (48-hour) test of endurance. This chapter is designed to:",
				"1.  {@b Drain Resources:} Challenge the party's ability to stay warm and alert.",
				"2.  {@b Build Tension:} Establish the mistrust between the adventurers and the pirate crew.",
				"3.  {@b Foreshadow the Dragon:} Introduce the unnatural cold and Harann's icy minions.",
				{
					"type": "entries",
					"name": "Environmental Rules: The Chill of Nemmonis",
					"entries": [
						"As the ship nears the {@b Adult White Dragon's ({@creature Harann Nemmonis|MTW-VS}')} domain, the cold is intensified by her ancient, corrupt magic.",
						"The environment progresses in danger over the 48-hour period. Use or adapt the following:",
						{
							"type": "table",
							"colLabels": [
								"Phase",
								"Hours Elapsed",
								"Condition",
								"Effects (DMG p. 110 Adaptation)"
							],
							"colStyles": [
								"text-align-left col-1",
								"text-align-left col-1 text-center",
								"text-align-left col-3",
								"text-align-left col-7"
							],
							"rows": [
								[
									"{@b 1. Biting Cold }",
									"0-12 h",
									"A relentless wind from the north.",
									"Creatures without cold weather gear suffer {@b Disadvantage } on {@b Dexterity ({@skill Acrobatics}) } and {@b Wisdom ({@skill Perception}) } checks."
								],
								[
									"{@b 2. Severe Cold }",
									"12-24 h",
									"Dense, chilling mist. Breath fogs instantly.",
									"Each hour, a creature not protected must make a {@b {@dc 10} Constitution saving throw or gain one level of Exhaustion."
								],
								[
									"{@b 3. Extreme Cold}",
									"24-48 h",
									"Sleet, frost, and near-freezing sea spray.",
									"The Constitution saving throw DC rises to 12. Failure results in gaining one level of Exhaustion AND taking {@dice 2d6} Cold damage."
								]
							]
						},
						"Encourage players to ration firewood, spell slots, and food. Warmth becomes a crucial resource."
					]
				}
			]
		},
		{
			"type": "entries",
			"name": "Voyage Random Encounter and Omen Table",
			"entries": [
				"Roll 1d6 every 6-8 hours, or when the party rests, to inject tension and flavor.",
				{
					"type": "table",
					"colLabels": [
						"d6",
						"Event",
						"Description"
					],
					"colStyles": [
						"col-1 text-center",
						"text-align-left col-2 text-center",
						"text-align-left col-9"
					],
					"rows": [
						[
							"1",
							"Ghost Fog",
							"Visibility drops to 15 feet. Figures seem to move within the mist, but they vanish when approached. A creature making a successful Wisdom ({@skill Perception}) {@dc 14} check sees a faint, stylized Koi symbol briefly flicker in the gloom."
						],
						[
							"2",
							"Frost Bloom",
							"A sudden, unnatural rime flowers across metal and cloth. Anyone using a metallic weapon or wearing heavy armor must scrape the frost off (costing 10 minutes) or suffer Disadvantage on their next Attack Roll due to brittle ice."
						],
						[
							"3",
							"Crew Argument",
							"{@creature Kaelen, the First Mate|MTW-VS}, violently accuses a deckhand of hearing the \"ice whisper.\" A successful Charisma ({@skill Persuasion}) {@dc 15} check can calm the crew; failure leads to lasting Distrust from the pirates towards the party."
						],
						[
							"4",
							"{@creature Renata|MTW-VS|Renata's} Dream",
							"During a long rest, one PC has a vivid dream of a {@b silver-scaled Koi} swimming through black ice toward a source of deep, subterranean warmth. The PC wakes with a sense of quiet purpose and gains Advantage on their next saving throw against cold."
						],
						[
							"5",
							"Drifting Wreck",
							"The {@i Glowing Gate} passes the remains of a doomed expedition. An active search (Intelligence ({@skill Investigation}) {@dc 14}) of the wreckage uncovers frozen corpses branded with the {@b Sacred Eye} symbol, confirming the fate of past raiders and foreshadowing the {@creature Frost-Cursed Mariner|MTW-VS}."
						],
						[
							"6",
							"Silent Strike",
							"A sudden bolt of solid ice, a frozen lightning strike, crashes into the sea, rocking the ship and showering the deck with shards. All on deck must succeed on a {@dc 13} Dexterity saving throw or take {@dice 1d6} piercing damage."
						]
					]
				}
			]
		},
		{
			"type": "entries",
			"name": "Roleplay Thread: Kaelen's Grudge",
			"entries": [
				"During the second day, when the cold has fully set in, {@b {@creature Kaelen, The First Mate|mtw-vs|Kaelen}} ({@creature Bandit} stats) will approach the party. Her tension comes from a deep, personal source\u2014the death of her brother.",
				{
					"type": "insetReadaloud",
					"entries": [
						"{@b Read-Aloud Text:}",
						"Kaelen leans on the frozen railing, his breath smoking in the wind. He doesn't look at you. \"My brother went after that island five years ago. He thought the {@b Sacred Eye's} gold was waiting for him. Harann sent back his body, frozen solid to a piece of driftwood.\"",
						"His jaw tightens. \"So forgive me if I don't cheer for you high-and-mighty heroes chasing ghosts and magic. I hope you're better fighters than he was, or we'll all end up Frost-Cursed.\""
					]
				},
				"{@b Insight {@dc 13}} reveals that her contempt is a mask for her grief and fear; she is intensely loyal to {@creature Thania Schmidt|mtw-vs|Captain Thania}. A successful {@b Charisma ({@skill Persuasion}) {@dc 15}} check, or a genuinely empathetic response, will soften her tone.",
				"{@b Success:} {@creature Kaelen, The First Mate|mtw-vs|Kaelen} grudgingly respects the party's mettle. She shares a final, critical piece of lore: {@b \"The Dragon-Kin Soldiers carry horns. They use them to shift the ice and block tunnels. If you hear the horn, change your plan.\"}",
				"{@b Failure:} {@creature Kaelen, The First Mate|mtw-vs|Kaelen} remains suspicious and distrustful, making it harder to secure supplies or help from the pirate crew later on."
			]
		},
		{
			"type": "entries",
			"name": "A Silence on the Waves",
			"entries": [{
				"type": "insetReadaloud",
				"entries": [
					"{@b Read-Aloud Text:}",
					"The second night bleeds into gray morning. The fog thickens until the horizon vanishes, and the {@i Glowing Gate} feels like it's sailing through milk. The air grows so still that even the sails sag.",
					"Then, faintly, the sound of bells\u2014soft, rhythmic, impossibly close\u2014rings through the mist."
				]
			},
				"A {@b {@dc 15} Perception check} reveals ghostly shapes drifting on the water ahead: another ship, iced over and partially submerged.",
				"If approached, the deck bears the sigil of the {@b Sacred Eye} carved into frozen wood."
			]
		},
		{
			"type": "entries",
			"name": "Encounter: The Frost-Cursed Mariners",
			"entries": [
				"{@b Setup:}",
				"Four to six undead sailors (use {@i {@creature Wight}} or {@i {@creature Ghoul}} stats, tinted by frost). They are remnants of {@creature Thania Schmidt|mtw-vs|Thania's} predecessors\u2014pirates who sought the Sacred Eye treasure decades ago. Their eyes glow faint blue, their flesh stiff as glass.",
				{
					"type": "insetReadaloud",
					"entries": [
						"{@b Read-Aloud Text (Combat Intro):}",
						"The shapes on the deck move\u2014slow, deliberate. Ice cracks as they turn toward you.",
						"The first raises its head. Frost falls from its beard in sheets.",
						"\"{@i You came for gold...}\" it rasps. \"{@i So did we.}\""
					]
				},
				{
					"type": "entries",
					"name": "Combat Notes",
					"entries": [{
						"type": "list",
						"items": [
							"{@b Environment:} Slippery frozen deck (Dex Save {@dc 12} or fall prone if dashing).",
							"{@b Tactics:} They drag intruders into the freezing water ({@condition Grappled} {@dc 13} → Con Save {@dc 14} or take {@dice 2d6} cold dmg each turn).",
							"{@b Twist:} On the third round, {@creature Kaelen, The First Mate|mtw-vs|Kaelen} recognizes one of them\u2014her brother."
						]
					}]
				}
			]
		},
		{
			"type": "entries",
			"name": "Kaelen's Moment",
			"entries": [
				"If {@creature Kaelen, The First Mate|mtw-vs|Kaelen} is present, she freezes mid-fight.",
				{
					"type": "insetReadaloud",
					"entries": [
						"{@b Read-Aloud Text:}",
						"Her sword lowers. His lips part but no sound comes out.",
						"\"...Brother?\"",
						"The creature twitches, then lunges\u2014not out of hate, but reflex. Its eyes flicker with a moment of pain before the frost claims it again."
					]
				},
				"{@b Player Choice Moment:}",
				{
					"type": "list",
					"items": [
						"A {@b {@skill Persuasion} {@dc 17}} or {@b {@skill Religion} {@dc 15}} can help Kaelen strike the final blow with peace.",
						"Failure causes her to hesitate, leaving her open to attack (auto-hit for 2d6 cold)."
					]
				},
				"When the undead falls, the ice around it melts slightly, revealing a {@b rusted locket} engraved with the Serpent symbol\u2014foreshadowing the {@creature Vaelithra, Fragment of Vaeil|mtw|Koi Vaelithra}'s power."
			]
		},
		{
			"type": "entries",
			"name": "Aftermath",
			"entries": [
				"The {@i Glowing Gate} drifts in silence. The fog seems heavier after the fight, pressing close like a held breath.",
				"Thania orders the remains burned with black powder, her voice flat.",
				"Kaelen says nothing, only stares at the melting ice where her brother fell.",
				"If the players comfort him or help with the ritual, he will later defend them fiercely against {@creature Thania Schmidt|mtw-vs|Thania}'s doubts\u2014a trust that can change the tone of Chapter 3 entirely."
			]
		},
		{
			"type": "entries",
			"name": "Reward",
			"entries": [{
				"type": "list",
				"items": [
					"{@b 500 XP each} (for mercy, combat, or giving peace).",
					"The {@b Locket of the Serpent Eye}:",
					{
						"type": "list",
						"items": [
							"Once per long rest, as a bonus action, the bearer may gain {@b Resistance to Cold Damage for 1 minute}.",
							"When used, it glows faintly\u2014a pulse of the {@creature Vaelithra, Fragment of Vaeil|mtw|Vaelithra}'s warmth."
						]
					}
				]
			}]
		},
		{
			"type": "entries",
			"name": "Transition: The Ice Horizon",
			"entries": [{
				"type": "insetReadaloud",
				"entries": [
					"{@b Read-Aloud Text:}",
					"Hours later, the mist parts just enough to reveal the impossible\u2014a stretch of solid ice spanning the ocean ahead. Beyond it, jagged peaks pierce the clouds. Lightning flickers through them in total silence.",
					"\"Raijinsho,\" {@creature Thania Schmidt|mtw-vs|Thania} murmurs, gripping the rail.",
					"The ship slows, hull grinding against the first rim of frost."
				]
			},
				"The crew begins preparations to disembark, their breath already turning to mist.",
				"Renata appears on deck for the first time since departure, her silver eyes faintly glowing in the dim light.",
				"Without a word, she gazes toward the island, as though staring into her own reflection."
			]
		}
	]
}
