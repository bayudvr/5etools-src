export const EpilogueSection = {
		"type": "section",
		"name": "Epilogue",
		"entries": [
			{
				"type": "section",
				"name": "The Thaw and The Treasure",
				"entries": [
					"The moment {@b Harann Nemmonis} is defeated, the ancient, corrupt magic she used to enforce the perpetual winter shatters.",
					{
						"type": "inset",
						"entries": [
							"{@b Read-Aloud Text:}",
							"As the dragon's dark influence vanishes, the entire island seems to take a collective sigh. The air warms perceptibly, and the low, constant moan of the wind dies away. The {@i Glowing Gate} is freed from its icy cage. {@b Captain Thania} waves you over, the promise of coin gleaming in her eyes."
						]
					},
					"{@b Resolution:}",
					{
						"type": "list",
						"items": [
							"{@b The Payout:} Captain Thania Schmidt keeps her word. The party receives the {@b 5,000 gp guaranteed payout}. Any {@b Magic Items} the party recovered (including the {@b Silver Scale} of the Koi Vaelithra) are their personal spoils."
						]
					}
				]
			},
			{
				"type": "section",
				"name": "The Guiding Fragment's Final Word (The Critical Interaction)",
				"entries": [
					"The scene is set for a brief, final conversation. {@b Renata} finds the party {@i before} they board the ship, away from the pirates.",
					{
						"type": "inset",
						"entries": [
							"{@b Read-Aloud Text:}",
							"You are walking back to the shore when the urchin girl, {@b Renata}, steps out from behind a newly thawed stack of cargo. Her clothes are ragged, but her eyes\u2014those unnervingly silver eyes\u2014shine with a deep, powerful relief you've never seen on a child. She offers a small, knowing smile, clutching her worn leather notebook."
						]
					},
					"{@b Renata:} \"You have the shard now, yes? Good. You must hold on to it. Not for the gold, but for the life it can bring back to this world. That makes it... {@b Two of Twe\u2014}\"",
					"She cuts off instantly, a flicker of panic crossing her face before she forces a quick, sharp laugh that doesn't quite reach her eyes.",
					"{@b Renata:} \"\u2014I mean, {@b Two of Eleven}. Forgive me. Sometimes I lose count.\"",
					"An unsettling stillness follows the correction. The players have a chance to act here.",
					{
						"type": "entries",
						"entries": [
							{
								"type": "entries",
								"name": "Player Interaction: Pressing the Guide",
								"entries": [
									"Any character who makes a {@b DC 16 Insight check} realizes the panic was genuine and that the number {@b Twelve} was the truth, but the second number, {@b Eleven}, was a conscious, protective lie.",
									"If the players choose to confront her, they can use their social skills:",
									{
										"type": "table",
										"colLabels": [
											"Action",
											"Skill Check (DC 16)",
											"Outcome"
										],
										"colStyles": [
											"text-align-left col-2",
											"text-align-left col-2 text-center",
											"text-align-left col-8"
										],
										"rows": [
											[
												"**Gentle Inquiry**",
												"**Charisma (Persuasion)**",
												"**Success:** She briefly lowers her guard. \"They made me forget, but they can't make me unknow. There are **twelve** pieces. And I am **one** of them. Tell no one.\" She then delivers the hint (see below) and disappears."
											],
											[
												"**Forceful Demand**",
												"**Charisma (Intimidation)**",
												"**Success:** She flinches but stands her ground. \"I am only a messenger, and I am telling you only what you *need* to know.\" She then delivers the hint (see below) and is immediately gone, fleeing in distress."
											],
											[
												"**Failure (Any Check)**",
												"\u2014",
												"She maintains her mask. \"It's just a game I play! I told you, I lose count.\" She quickly delivers the hint and fades into the breeze before they can press her again."
											]
										]
									},
									"Regardless of the outcome, she concludes with the hook for the next adventure:",
									"{@b Renata:} \"The next fragment is not ice and cold. Look for the {@b Mask of the Harlequin}. It is worn by a Warlock's phantom, hidden inside the {@b Violet Carnival's Demiplane}\u2014a place of false mirrors and fleeting joy.\"",
									"She gives a final, silent nod and fades into the crisp ocean breeze, leaving the party with more gold, a piece of a shattered god, and the shocking realization that their innocent guide is, herself, one of the divine fragments. The sails of the {@i Glowing Gate} rise, and the journey continues."
								]
							}
						]
					}
				]
			}
		]
	}
