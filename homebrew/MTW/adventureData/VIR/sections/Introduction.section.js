export const IntroductionSection = [
	{
		"type": "section",
		"name": "Introduction",
		"entries": [
			"This one-shot adventure is part of the ongoing {@b Malvidra Twisted World's: Vaelithra} saga. It takes place in the year {@b 35 A.S. (After Sundering)}, on the {@b 6th of Sol'thara, Sylvryn Day}, when the seas of Dewanegara churn with legends of dragons, pirates, and forgotten fragments of divinity.",
			"Far to the east lies the {@b Island of Raijinsho}, an isle perpetually locked in winter's grasp. Ice coats its cliffs, snow buries its jungles, and storms gather endlessly around it. This unnatural frost is not born of nature, but of the adult white dragon {@creature Hanann Nemmonis|MTW}, who has claimed the island as her lair.",
			"Beneath the dragon's frozen hoard lies a secret even Hanann ignores: a {@b silver-scaled koi} gliding in the warmth of a hidden pond. This koi is no ordinary creature, but a fragment of the god {@deity Vaeil|the primordials|MTW|Vaeil, Keeper of the Archive and Master of Time}\u2014known as {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra}. Protected by subtle divine magic, the pond remains unfrozen despite the dragon's presence.",
			"Our story begins not on Raijinsho, but at {@b Thundrum Port}, a bustling harbor where pirate ships, merchant vessels, and fisherfolk all vie for space. Among the crowd lies the {@b Glowing Gate}, a pirate ship under the command of {@creature Captain Thania Schmidt|MTW-VS}, a daring raider who seeks Raijinsho's treasures. Knowing her crew alone is not enough to challenge a dragon, Thania spreads word in the port, hiring new blood.",
			"It is here the adventurers will encounter {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra} in human guise, a spirited newspaper girl with eager eyes. With her voice and flyers, she spreads Thania's message across the port\u2014yet beneath her playful charm lies a deeper truth: she seeks not treasure, but to bring the heroes face-to-face with her divine fragment self hidden on Raijinsho.",
			{
				"type": "section",
				"name": "Running This Adventure",
				"entries": [
					"This adventure is designed for characters of {@b levels 7\u20139}.",
					"At this tier, adventurers have powerful abilities but are still mortal enough that a dragon remains a terrifying challenge.",
					"The adventure combines:",
					{
						"type": "list",
						"items": [
							"{@b Roleplay} at Thundrum Port (meeting {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra} and {@creature Captain Thania Schmidt|MTW-VS|Captain Thania}).",
							"{@b Combat} against the dragon's followers and the white dragon herself.",
							"{@b Lore reveal} of {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra}, through divine time-shifting events."
						]
					},
					{
						"type": "entries",
						"name": "Themes",
						"entries": [
							{
								"type": "list",
								"items": [
									"{@b Pirates and peril.} Adventurers deal with shady bargains, risky allies, and the promise of dragon treasure.",
									"{@b Frozen dread.} The unnatural winter of Raijinsho creates an alien, hostile environment.",
									"{@b Time's intervention.} {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra}'s powers may shift time itself, creating narrative \"rewinds\" when the heroes fall."
								]
							},
							"The one-shot should take about {@b 4\u20136 hours} to play, depending on the group's pace."
						]
					}
				]
			},
			{
				"type": "section",
				"name": "Adventure Hooks",
				"entries": [
					"Here are some ways you can draw your players into the story:",
					{
						"type": "list",
						"items": [
							"{@b The Promise of Treasure.} A fortune lies in {@b Raijinsho}, and word has spread quickly. Gold, artifacts, and forgotten relics await.",
							"{@b Pirate's Call.} {@creature Captain Thania Schmidt|MTW} is looking for brave souls at {@b Thundrum Port}\u2014any adventurer with a taste for danger can be tempted.",
							"{@b Rumors of the Divine.} Scholars and clerics whisper of a strange \"{@b warm pond}\" on {@b Raijinsho} where magic flows against the dragon's frost. Such rumors might intrigue anyone tied to divine or arcane power.",
							"{@b The Newspaper Girl.} The human form of {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra} herself approaches the adventurers, persuading them with childlike charm and promise of fame if they succeed."
						]
					}
				]
			},
			{
				"type": "section",
				"name": "The Port of Thundrum",
				"entries": [
					{
						"type": "entries",
						"name": "Scene: Thundrum Port",
						"entries": [
							"The smell of brine, tar, and sizzling street food fills the air. Sailors curse as crates swing overhead, merchants bark prices, and gulls screech above the crowded harbor. Amidst the chaos, a high, cheerful voice cuts through:",
							{
								"type": "insetReadaloud",
								"entries": [
									"\"Extra! Extra! Crew wanted for the {@i Glowing Gate}! Glory, riches, and the dragon's hoard await!\""
								]
							},
							"A small figure darts between dockworkers, waving a stack of papers. It's a {@b young girl in patched clothes}, her eyes alight with mischief and curiosity. She thrusts one of the flyers toward the adventurers.",
							{
								"type": "entries",
								"name": "Vaelithra's Approach (in human form)",
								"entries": [
									"{@b Roleplay Notes:}",
									{
										"type": "list",
										"items": [
											"She acts excitable, like a child selling papers, but slips in oddly wise phrases now and then.",
											"Her main goal: get the adventurers intrigued and lead them to {@creature Captain Thania Schmidt|MTW-VS}.",
											"She never lies, but often avoids direct answers about herself."
										]
									},
									"{@b Example Dialogue:}",
									{
										"type": "list",
										"items": [
											"{@i \"You look strong! Stronger than the usual drunkards around here. Raijinsho needs heroes, don't you think?\"}",
											"{@i \"They say {@creature Hanann Nemmonis|MTW} sleeps on a mountain of gold. I say, what's a little frostbite if it means fortune?\"}",
											"If asked why she's helping: {@i \"Oh, I just... like stories. And you, I think, could make a great one.\"}"
										]
									},
									"{@b Skill Checks:}",
									{
										"type": "list",
										"items": [
											"{@b {@skill Insight} {@dc 16}:} She's hiding something; her excitement feels rehearsed, as though she's nudging fate itself.",
											"{@b {@skill Arcana} or {@skill Religion} {@dc 18}:} Her presence has a faint divine aura, though well-hidden."
										]
									}
								]
							},
							{
								"type": "entries",
								"name": "Enter Captain Thania Schmidt",
								"entries": [
									"Moments later, a ripple passes through the crowd as {@creature Captain Thania Schmidt|MTW-VS} arrives. A tall woman with sun-bleached hair and a scar along her jaw, she commands attention with a swagger and a predator's smile. Her coat is crimson, lined with gold, and a {@b cutlass hangs at her hip}\u2014its hilt polished from use.",
									"She regards the adventurers like goods on display.",
									"{@b Example Dialogue:}",
									{
										"type": "list",
										"items": [
											"{@i \"So, you're the ones my little herald dragged in? Good. I've no patience for cowards.\"}",
											"{@i \"We're bound for Raijinsho. An island locked in ice, where {@creature Hanann Nemmonis|MTW} guards her hoard. I won't sugarcoat it: it's a deathtrap. But with you on my side... well, perhaps we'll beat the odds.\"}",
											"{@i \"Help me, and you'll have your share. Refuse, and I'll find someone else\u2014though not as promising, I'm sure.\"}"
										]
									},
									"{@b Skill Checks:}",
									{
										"type": "list",
										"items": [
											"{@b {@skill Persuasion} {@dc 15}:} Secure a better cut of the treasure (one extra magic item roll or +10% gold).",
											"{@b {@skill Intimidation} {@dc 15}:} Make Thania respect their strength\u2014she won't admit it, but she'll hold back less information later.",
											"{@b {@skill Insight} {@dc 14}:} Thania is hiding her desperation; she knows her crew alone doesn't stand a chance."
										]
									}
								]
							},
							{
								"type": "entries",
								"name": "The Choice",
								"entries": [
									"The scene should end with the adventurers deciding whether to:",
									{
									  "type":"list",
									  "items": [
    									"{@b Join {@creature Captain Thania Schmidt|MTW-VS|Thania}'s raid} (the intended path).",
    									"{@b Probe {@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra} further} (risk revealing her secret early).",
    									"{@b Refuse} ({@creature Vaelithra, Fragment of Vaeil|MTW|Vaelithra} will press harder, subtly nudging them\u2014time \"feels\" off if they decline)."
									   ]
									},
									"{@b Narrative Hook if They Hesitate:}",
									"The newspaper girl tilts her head, almost knowingly, and whispers:",
									{
										"type": "insetReadaloud",
										"entries": [
											"{@i \"You don't want to miss this story. It's... important.\"}",
											"Her eyes glimmer silver for the briefest second before returning to normal."
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
]

