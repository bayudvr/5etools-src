export const Chapter3Section = {
	"type": "section",
	"name": "Chapter 3 - Into The Labyrinth of Ice",
	"entries": [
		"This final chapter features the exploration of {@b Raijinsho Island}, the confrontation with {@b Harann Nemmonis}, and the discovery of the {@b Koi Vaelithra}.",
		{
			"type": "section",
			"name": "Phase 1: The Frozen Approach",
			"entries": [
				"The ship is forced to halt where the water becomes a vast, jagged expanse of {@b frozen sea}.",
				{
					"type": "inset",
					"entries": [
						"{@b Read-Aloud Text:}",
						"The sea has become a nightmare. The water is no longer fluid, but a sheet of ancient, jagged ice that stretches for a mile, a vast, silent plain of danger. {@b Captain Thania} hands you a coil of rope and a grim look. \"This is where we part ways, mercenaries. Good luck. We'll be waiting for your signal.\""
					]
				},
				{
					"type": "entries",
					"name": "The Treacherous Sea (Skill Challenge)",
					"entries": [
						"The half-mile journey across the frozen sea maintains the {@b Extreme Cold} rules (DC 12 Con save/hour, 2d6 Cold damage on failure). To safely and quickly reach the island shore, the party must collectively achieve {@b 6 successes} before accumulating 3 failures.",
						{
							"type": "table",
							"colLabels": [
								"Available Checks (DC 15)",
								"Purpose"
							],
							"colStyles": [
								"text-align-left col-4",
								"text-align-left col-8"
							],
							"rows": [
								[
									"**Wisdom (Survival)**",
									"To find stable paths and navigate by the shifting winds."
								],
								[
									"**Strength (Athletics)**",
									"To climb over high, slippery ice ridges and secure ropes."
								],
								[
									"**Intelligence (Nature)**",
									"To predict thin ice or weak points in the sea."
								],
								[
									"**Dexterity (Acrobatics)**",
									"To traverse slick, uneven patches without falling."
								]
							]
						},
						"{@b Consequence of 3 Failures:} The party falls into a hidden crevasse or triggers a patch of thin ice. They take {@b 2d6 bludgeoning damage} from the fall and must spend one round stabilizing and climbing out (using a DC 13 Athletics check).",
						{
							"type": "entries",
							"name": "Ambush: The Corrupted Patrol",
							"entries": [
								"Midway across the ice, the party is attacked.",
								{
									"type": "list",
									"items": [
										"{@b Enemies:} {@b Three Frost-Cursed Mariner} and {@b One Frost-Cursed Captain}.",
										"{@b Dragon's Foreshadowing:} During the combat, a shadow should pass briefly overhead\u2014a fleeting sign that {@b Harann Nemmonis} is aware of the intruders, though she is too arrogant to intervene personally at this distance."
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Frozen Corpse Loot (Reinforce Survival)",
							"entries": [
								"Allow players to search one or two frozen corpses they pass along the way (use the loot table from the {@i Story Outline.md} file). The most useful find would be the {@i *Scroll of }Protection from Energy{@b * (Cold only) or the }Potent Antifreeze** to help with the Extreme Cold saves."
							]
						},
						{
							"type": "entries",
							"name": "The Snow-Covered Shore",
							"entries": [
								"The party reaches a wide beach buried under deep snow, which counts as {@b difficult terrain}. Guarding the central entrance to the {@b Cave Labyrinth} are the dragon's organized forces.",
								{
									"type": "list",
									"items": [
										"{@b Enemies:} {@b Two Frost-Cursed Kobold} and {@b Two Frost-Cursed Soldier} (use {@i Ogre} or {@i Berserker} stats with cold resistance).",
										"{@b Tactics:} The soldiers utilize {@b Hit-and-Run} tactics, harassing the party and retreating into the caves if severely threatened, ready to ambush again inside."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "section",
			"name": "Phase 2: The Cave Labyrinth",
			"entries": [
				"The party has successfully crossed the {@b Treacherous Sea} and navigated the initial snow-covered shore. They stand at the mouth of the ice-cave labyrinth.",
				{
					"type": "entries",
					"name": "Encounter 1: The Serpent's Heart Lock (Puzzle/Bypass)",
					"entries": [
						"This encounter happens immediately upon entering the cave.",
						"The first tunnel segment is a short, slick path leading to a choice: an immediate, narrow path to the right, or the main, wide tunnel straight ahead.",
						{
							"type": "entries",
							"name": "The Koi Vaelithra Lock (The Right Path)",
							"entries": [
								{
									"type": "inset",
									"entries": [
										"{@b Read-Aloud Text:}",
										"The narrow tunnel to your right terminates quickly at a solid door of {@b obsidian and bronze}, unlike the ice and rock everywhere else. Carved into its surface is an ancient {@b coiled serpent}, the symbol of the {@b Serpent God of Health and Envy}. There are no handles, only shallow indentations on the serpent's scales, and the air here is faintly, unnaturally warm. This path is clearly sealed and untouched by the dragon's presence."
									]
								},
								{
									"type": "list",
									"items": [
										"{@b The Problem:} This door leads to the {@b trap-free way} to the {@b Koi Vaelithra} in the {@b Warm Pond}, but it is sealed by the ancient denizen's {@b Geothermal Lock}.",
										"{@b The Key:} The puzzle requires diverting the cave's natural geothermal energy.",
										"{@b Solution (DC 15 Intelligence Checks):}",
										{
											"type": "list",
											"items": [
												"A successful {@b DC 15 Intelligence (Investigation)} check reveals three specific scales on the carving that act as pressure points, and a sequence of lights/glyph patterns around the serpent's eyes.",
												"A successful {@b DC 15 Intelligence (Arcana)} check determines the correct {@b lever sequence} needed to divert the geothermal energy from a hidden source, triggering the door."
											]
										},
										"{@b Success:} The bronze door {@i hisses} open, revealing a short, clear, {@b trap-free tunnel} leading directly to the {@b Warm Pond} where the {@b Koi Vaelithra} waits. {@i (Note: Players should be encouraged to complete the main objective first, but this is a clear-cut victory path if they choose it.)}",
										"{@b Failure:} A failed check results in a temporary jet of harmless steam. The party must wait {@b ten minutes} before attempting the check again."
									]
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Encounter 2: The Pirate's Trap (The Labyrinthine Path)",
					"entries": [
						"The party continues down the main, wider tunnel straight ahead, which appears to be the most heavily used path.",
						{
							"type": "entries",
							"name": "The Frozen Treasure Repository (Wide Area / Hexagonal Room)",
							"entries": [
								{
									"type": "inset",
									"entries": [
										"{@b Read-Aloud Text:}",
										"The main passage widens here, and a tunnel to the left leads into a {@b hexagonal chamber}. This space was clearly once a storage room for the {@b Sacred Eye} pirates. The walls are lined with empty, broken weapon racks and scattered debris, all covered in a thick layer of frost. In the center, a huge, black {@b ship's chest} is completely encased in a shimmering dome of ancient, {@b magically-reinforced ice}."
									]
								},
								{
									"type": "list",
									"items": [
										"{@b Risk/Reward:} The {@b Frozen Chest} inside contains the {@b small hoard of treasures} (500 gp and two {@i Potions of Greater Healing}).",
										"{@b The Trap Trigger:} The hexagonal room is a tripwire. {@b Harann's minions} are not stupid; they know raiders always go for the loot first. As soon as the party begins to {@i attempt to free the chest} (takes 10 minutes of effort) or enters the {@b tunnel directly in front of the hexagonal room}, the ambush is sprung."
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "The Dragon-Kin Ambush (Tunnel Beyond the Hexagonal Room)",
							"entries": [
								"This combat encounter should occur in the {@b tunnel area in front of the hexagonal room} (or {@i after} it, as you described). This makes retreat difficult and focuses the fight in a choke point.",
								{
									"type": "list",
									"items": [
										"{@b Enemies:} {@b Two Frost-Cursed Kobold} (to harass/distract), {@b One Frost-Cursed Ogre}, and {@b One Frost-Cursed Chieftain}.",
										"{@b Tactics:} The Chieftain orders the Ogre to hold the tunnel entrance while the Kobolds use ranged attacks or try to flank. The Chieftain focuses on using the environment.",
										"{@b The Hazard:} The Dragon-Kin know this tunnel is rigged. The Chieftain can use a {@b Minor Lair Action} (once per round, on its initiative count) to trigger a partial {@b ceiling collapse} of ice (DC 14 Dexterity Save or take 3d6 bludgeoning damage and be restrained by ice shards).",
										"{@b Loot & Lore:} The defeated {@i Frost-Cursed Chieftain} drops the {@b Dragon-Kin Warhorn}. The horn is cracked, but a successful {@b DC 15 Charisma (Performance)} check allows it to be used once to cause a {@b minor cave-in} or to scare off minor minions, confirming Kaelen's warning."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "section",
			"name": "Phase 3: The Climax",
			"entries": [
				"After defeating the ambush and passing through the tunnels, the path leads directly up to the final area.",
				{
					"type": "entries",
					"name": "The Lair Entrance",
					"entries": [
						"This final segment is the last stretch of the main tunnel leading up to the large circular chamber. The {@b Extreme Cold} rules should be at their most punishing here."
					]
				},
				{
					"type": "entries",
					"name": "The Final Confrontation: Harann Nemmonis",
					"entries": [
						"The party enters the large, circular top chamber\u2014the main lair of {@b Harann Nemmonis} (Adult White Dragon, CR 13). The confrontation proceeds as planned."
					]
				}
			]
		},
		{
			"type": "section",
			"name": "Phase 4: The True Objective (The Koi Vaelithra)",
			"entries": [
				"After the dragon is defeated or fled, the party can now safely use the {@b Geothermal Lock} and access the secret path.",
				{
					"type": "list",
					"items": [
						"{@b The Warm Pool:} The door from the first chamber leads to the warm, geothermally fed chamber.",
						"{@b The Silver Scale:} The {@b Koi Vaelithra} floats in the water, leaving behind the {@b Silver Scale} (the fragment) for the players, granting {@b Resistance to Cold Damage} for 24 hours (the divine boon)."
					]
				},
				"This revised flow honors the specificity of your map, ensuring a smooth and logical progression through the lair. Let me know if you would like me to detail the {@b Epilogue} next!",
				{
					"type": "entries",
					"name": "The Divine Boon and Fail-Safe",
					"entries": [
						{
							"type": "list",
							"items": [
								"{@b Boon:} The Koi emits a subtle, powerful energy. Any character who touches the water or the {@b Silver Scale} (see below) gains {@b Resistance to Cold Damage} for the next 24 hours.",
								"{@b The Silver Scale:} The party finds a single {@b Silver Scale} left on the edge of the pool. This is the {@b Koi Vaelithra} fragment itself.",
								"{@b DM Fail-Safe (If TPK is imminent):} If the party is wiped out or in dire need of help during the fight with Harann, the {@b Koi Vaelithra} freezes time. It appears before the players, restoring their resources to a {@b Long Rest} state while their enemies remain frozen. The Koi then whispers its cryptic message about the next fragment and leaves the {@b Silver Scale} as a sign before time resumes. This maintains narrative continuity despite a near-defeat."
							]
						}
					]
				}
			]
		}
	]
}
