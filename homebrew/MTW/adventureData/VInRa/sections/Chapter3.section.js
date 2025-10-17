export const Chapter3Section = {
	"type": "section",
	"name": "Chapter 3: Into the Labyrinth of Ice",
	"entries": [
		"This final chapter is split into two phases: the grueling trek across the frozen sea and shore, and the descent into the labyrinthine lair itself.",
		{
			"type": "section",
			"name": "Phase 1: The Frozen Approach",
			"entries": [
				"This phase begins the moment the party disembarks and involves a long sequence of skill challenges and combat encounters across the vast, frozen landscape before they reach the relative safety of the main cave entrance.",
				{
					"type": "entries",
					"name": "Disembarking onto the Ice",
					"entries": [{
						"type": "insetReadaloud",
						"entries": [
							"{@b Read-Aloud Text:}",
							"The {@b Glowing Gate} groans to a halt. The sea ahead is no longer water, but a vast, terrifying expanse of ancient, jagged ice\u2014the {@b frozen sea} that protects Raijinsho Island. The island itself is a mountain of blinding white, shrouded by thick, swirling clouds that whip snow across the deck. {@creature Thania Schmidt|mtw-vs|Captain Thania} hands you a coil of rope and a grim look. \"The ice is treacherous. The shore is a long walk, and the dragon's territory is everywhere. Good luck, mercenaries. We'll be waiting for your signal.\""
						]
					}]
				},
				{
					"type": "entries",
					"name": "The Treacherous Sea",
					"entries": [
						"The distance from the ship to the island shore is roughly {@b half a mile} of frozen sea. The constant wind and ice ensure the {@b Extreme Cold} rules (DMG p. 110) remain in effect throughout this phase.",
						{
							"type": "list",
							"items": [
								"{@b Skill Challenge (Navigation):} To cross the frozen sea quickly and safely, the party must succeed on a series of skill checks. Require the party to collectively achieve {@b 6 successes} before accumulating 3 failures.",
								{
									"type": "list",
									"items": [
										"{@b Available Checks ({@dc 15}):} {@b Wisdom ({@skill Survival})} to find stable paths; {@b Strength ({@skill Athletics})} to climb over high ice ridges; {@b Intelligence ({@skill Nature})} to predict thin ice; {@b Dexterity ({@skill Acrobatics})} to traverse slippery patches."
									]
								},
								"{@b Consequences of Failure:} If the party accumulates 3 failures, they fall into a hidden crevasse or trigger a patch of thin ice. They take {@b {@dice 2d6} bludgeoning damage} from the fall and must spend one round stabilizing before climbing out."
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Ambush: The Corrupted Patrol",
					"entries": [
						"Midway across the frozen sea, the party is attacked by the dragon's mindless sentinels.",
						{
							"type": "list",
							"items": [
								"{@b Enemies:} {@b Four {@creature Frost-Cursed Mariner|mtw-vs}}. (These homebrewed creatures are resistant to cold damage and apply a chilling, slowing effect on hit).",
								"{@b The Dragon's Eye:} During the combat, the DM should briefly describe a shadow passing far overhead\u2014a fleeting sign that {@b {@creature Harann Nemmonis|mtw-vs}} is aware of the intruders, though she is too arrogant to intervene personally at this distance."
							]
						},
						{
							"type": "entries",
							"name": "Frozen Corpse Loot Table",
							"entries": [
								"After combat or during their exploration, players may search the bodies of the {@b {@creature Frost-Cursed Mariner|mtw-vs}} or other partially frozen corpses they spot in the ice. Roll on the table below to determine what grim scraps of previous expeditions they uncover.",
								{
									"type": "table",
									"colLabels": [
										"d10",
										"Item Found",
										"Description"
									],
									"colStyles": [
										"col-1 text-center",
										"text-align-left col-3",
										"text-align-left col-8"
									],
									"rows": [
										[
											"1-3",
											"Frozen Rags",
											"The corpse is stripped bare and frozen solid. You find nothing of value."
										],
										[
											"4",
											"Survival Rations",
											"A single ration of frozen ship biscuits, still edible."
										],
										[
											"5",
											"{@dice 5d6} Copper Pieces",
											"A handful of worthless, frozen coins fused into the corpse's belt."
										],
										[
											"6",
											"Broken Tool",
											"A frozen, non-magical climbing pick. The metal is brittle and will likely snap if used in any demanding way."
										],
										[
											"7",
											"Tattered Journal Page (Lore)",
											"A single, frozen page detailing a desperate final entry about \"the horns\" or \"the whispers in the ice,\" warning about the Dragon-Kin Soldiers."
										],
										[
											"8",
											"Potent Antifreeze",
											"A small vial of strong Dwarven spirits that gives one character Advantage on their next {@dc 10} Constitution saving throw against Extreme Cold."
										],
										[
											"9",
											"Small Gemstone",
											"A polished, but chillingly cold quartz (worth 50 gp) clutched in the corpse's hand."
										],
										[
											"10",
											"Scroll of Protection from Energy",
											"A water-damaged scroll that is still legible. It has the Protection from Energy spell (Cold only)."
										]
									]
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "The Snow-Covered Shore",
					"entries": [
						"After successfully crossing the frozen sea, the party reaches the shore\u2014a wide, flat beach now buried under deep, uneven snow.",
						{
							"type": "list",
							"items": [
								"{@b Environmental Challenge:} The deep snow makes movement difficult. Treat the entire shoreline as {@b difficult terrain}.",
								"{@b Encounter:} Guarding the central entrance to the {@b Cave Labyrinth} are the Dragon's organized soldiers.",
								{
									"type": "list",
									"items": [
										"{@b Enemies:} {@b Four {@creature Frost-Cursed Kobold|mtw-vs} Soldiers}. They utilize {@b Hit-and-Run} tactics, focusing on harassing the party and retreating into the caves if severely threatened, ready to ambush again inside."
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
				"Once the party enters the main cave system, they begin the dungeon crawl toward the final lair. The labyrinth is a maze of slick, ice-covered tunnels and larger chambers that once served a community living beneath the island's volcanic core\u2014now silent and frozen.",
				{
					"type": "entries",
					"name": "Environmental Hazard: The Whisper of Ice",
					"entries": [{
						"type": "list",
						"items": [
							"{@b Difficult Terrain:} Treat all non-chamber areas as {@b difficult terrain} due to the slick ice.",
							"{@b Slippery Surfaces:} Any time a character moves more than half their speed, they must succeed on a {@b DC 10 Dexterity ({@skill Acrobatics}) check} or fall prone.",
							"{@b Illusory Frost:} Treat all areas beyond 60 feet as {@b lightly obscured}."
						]
					}]
				},
				{
					"type": "entries",
					"name": "Frozen Treasures and the Failed Raid",
					"entries": [{
						"type": "entries",
						"name": "The Frozen Chest",
						"entries": [
							"In a medium-sized tunnel junction, the party discovers a chest fused into a sheet of ice.",
							{
								"type": "list",
								"items": [
									"{@b Challenge:} The chest is covered in {@b 2 inches of solid ice}. Characters must spend time or resources to free it. Requires {@b 10 minutes} of sustained effort (and four successful {@b DC 15 Strength ({@skill Athletics})} checks) to free the chest.",
									"{@b Loot:} The chest holds a minor reward: {@b 500 gp} worth of mixed, frozen currency and {@b two Potions of Greater Healing}."
								]
							}
						]
					}]
				},
				{
					"type": "entries",
					"name": "The Old Denizens: The Geothermal Locks (Puzzle)",
					"entries": [
						"The winding tunnels occasionally reveal ancient, carved stone that predates the dragon, hinting at a former sanctuary. This can be solved to gain a tactical advantage or a minor reward.",
						{
							"type": "entries",
							"name": "Puzzle: The Warm Path",
							"entries": [
								"In a large central chamber, three paths lead deeper into the labyrinth. Two are choked with ice; the third is clear but marked by an ominous dragon claw scratch (Path C, the direct way to Harann).",
								{
									"type": "list",
									"items": [
										"{@b The Problem:} The two ice-choked paths (A and B) lead to a hidden stash or a bypass. The paths are sealed by a mechanical lock hidden on a carving of a great, coiled serpent (the denizens' original protector). A successful {@b {@dc 15} {@skill Intelligence} ({@skill Investigation})} check reveals faint glyphs under the ice-slick, suggesting the path was once warmed by geothermal heat.",
										"{@b The Solution:} A successful {@b {@dc 15} Intelligence ({@skill Arcana} or {@skill Investigation})} check allows a character to activate the {@b Geothermal Lock} (a pressure/lever puzzle related to the serpent's scales). This action melts the ice from one of the choked paths (DM's choice: {@b Path A} leads to minor treasure; {@b Path B} leads to a direct, trap-free route to the lair)."
									]
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "The Dragon's New Defenses",
					"entries": [{
						"type": "entries",
						"name": "Guard Patrol: Dragon-Kin Ambush",
						"entries": [
							"In a long, straight tunnel that shows signs of recent, meticulous cleanup, the Dragon-Kin soldiers have set a defensive line.",
							{
								"type": "list",
								"items": [
									"{@b Enemies:} {@b Three {@creature Frost-Cursed Kobold|mtw-vs} Soldiers} (homebrewed cold-resistant fighters).",
									"{@b Traps:} The soldiers have rigged a tripwire connected to a chute that releases a torrent of {@b sharp, icy shards} (a homebrew hazard, dealing {@b 3d6 piercing damage} on a failed {@b {@dc 14} Dexterity saving throw}). The Dragon-Kin are positioned behind ice barriers, giving them {@b three-quarters cover} from the party.",
									"{@b Loot:} A defeated Dragon-Kin may drop a {@b Dragon-Kin Warhorn}, which the party can use (see development later)."
								]
							}
						]
					}]
				},
				{
					"type": "entries",
					"name": "The Dragon's Lair Entrance",
					"entries": [
						"The final path (likely Path C or the successful Path B) leads to a massive, cavernous entrance, reeking of ozone, death, and frozen fish.",
						{
							"type": "list",
							"items": [
								"{@b Final Encounter:} The party has reached the main lair of {@b {Harann Nemmonis}}."
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "The True Objective: The Koi Vaelithra (Post-Harann)",
					"entries": [
						"{@b {@i (DM Note: This location is not discovered until after the dragon is defeated or forced to flee.)}}",
						"Located in a small, hidden tunnel leading off the back of the dragon's main treasure chamber, the party finds a simple sheet of ice sealing a doorway.",
						{
							"type": "list",
							"items": [
								"{@b Discovery:} A character succeeding on a {@b {@dc 17} Wisdom ({@skill Perception})} or {@b {@skill Intelligence} ({@skill Investigation})} check notices that this sheet of ice has no dragon claw marks on it, and the ice appears thin\u2014as if the dragon never noticed the seam.",
								"{@b The Pond:} The tunnel opens into a small, naturally warm chamber (a comfortable 50°F / 10°C). In the center is a small, crystal-clear pond fed by a hidden geothermal source. Floating within the pond is the shimmering, silvery {@b {@creature Vaelithra, Fragment of Vaeil|mtw|Koi Fish Vaelithra}}. The divine essence of the Koi is palpable, offering a moment of quiet peace amidst the ruin.",
								"{@b The Reward:} The {@b {@creature Vaelithra, Fragment of Vaeil|mtw|Koi Fish Vaelithra}}} will make a single, clear mental contact with the nearest character, transmitting vital, cryptic information about the next Vaelithra fragment, essentially providing the hook for the next adventure in the campaign. The party can then gather the {@b magic items} from {@creature Harann Nemmonis|mtw-vs|Harann's} main hoard, fulfilling their contract with {@creature Thania Schmidt|mtw-vs|Captain Thania}."
							]
						}
					]
				}
			]
		}
	]
}
