export const Part6Section = {
	"type": "section",
	"name": "**Chapter 5: Tenda Peramal Varquin**",
	"entries": [{
			"type": "section",
			"name": "Running This Chapter",
			"entries": [
				"Chapter ini adalah {@b titik klarifikasi besar} dalam Violet Carnival.",
				"Berbeda dengan wahana sebelumnya yang bersifat simbolik dan puzzle-driven, Tenda Peramal Varquin berfungsi sebagai:",
				{
					"type": "list",
					"items": [
						"Pengikat seluruh {@i clue} yang sudah pemain kumpulkan",
						"Penegas konflik emosional (Sylvia\u2013Juval\u2013Belgruth)",
						"Persiapan mental dan naratif menuju {@b panggung akhir}"
					]
				},
				"Varquin tidak memberi solusi instan, tetapi {@b menyusun kebenaran} lewat simbol dan takdir."
			]
		},
		{
			"type": "section",
			"name": "Area: Tenda Peramal Varquin",
			"entries": [
				"Tenda kecil dari kain beludru ungu tua, berdiri sedikit terpisah dari keramaian.",
				"Lampion bulan dan bintang berkedip lembut di depan pintu, sementara aroma dupa manis bercampur bau kertas tua memenuhi udara.",
				"Sebuah papan kayu kecil bertuliskan samar:",
				"{@b \"Madame Varquin\u2014Pembaca Takdir & Penangkap Mimpi.\"}"
			]
		},
		{
			"type": "section",
			"name": "Read-Aloud: Menemukan Tenda",
			"entries": [{
				"type": "inset",
				"entries": [
					"{@i Kalian terus melangkah di tengah hiruk pikuk Karnaval Violet. Setelah melodi yang meresahkan, sensasi menyusut, dan gema kenangan yang terdistorsi, kalian teringat akan ucapan wanita badut di gerbang\u2014bahwa tenda ramalannya selalu terbuka.}",
					"{@i Di hadapan kalian kini berdiri sebuah tenda beludru ungu tua. Lampion kecil berbentuk bulan dan bintang berkelip redup. Aroma dupa yang manis, bercampur bau kertas tua dan sesuatu yang sulit dijelaskan, menguar dari balik tirai.}",
					"{@i Tulisan di papan kayu kecil itu hampir pudar, namun masih terbaca jelas.\"}"
				]
			}]
		},
		{
			"type": "section",
			"name": "NPC: Varquin",
			"entries": [
				"Varquin duduk di balik meja bundar kecil.",
				"Kartu tarot tersebar rapi, lilin-lilin menari perlahan, dan bola kristal memantulkan cahaya ungu lembut.",
				"Ia berpenampilan seperti badut wanita\u2014ceria di luar, penuh rahasia di dalam.",
				{
					"type": "entries",
					"name": "DM Notes",
					"entries": [{
						"type": "list",
						"items": [
							"Varquin adalah {@creature Vaelithra, Fragment of Vaeil|MTW-VS}, meski tidak perlu langsung diungkap sepenuhnya.",
							"Ia sudah mengetahui:",
							{
								"type": "list",
								"items": [
									"Misi penyelamatan Sylvia",
									"Peran Belgruth",
									"Perjalanan pemain di wahana lain"
								]
							},
							"Ia {@b tidak berbohong}, tapi berbicara melalui simbol."
						]
					}]
				}
			]
		},
		{
			"type": "section",
			"name": "Read-Aloud: Sambutan Varquin",
			"entries": [{
				"type": "inset",
				"entries": [
					"{@i Wanita badut itu mendongak saat kalian masuk. Senyumnya hangat, tapi matanya menyimpan kelelahan yang dalam.}",
					"{@i \"Ah... akhirnya,\" katanya lembut, seperti melodi dari kotak musik tua.}",
					"{@i \"Ada takdir yang menunggu untuk dibaca. Dan... jiwa yang menunggu untuk dibebaskan.\"}",
					"{@i Ia menunjuk kursi kosong di hadapannya.}",
					"{@i \"Duduklah. Biarkan kartu-kartu ini mengingat apa yang dunia coba lupakan.\"}"
				]
			}]
		},
		{
			"type": "section",
			"name": "Mekanik Utama: Pembacaan Tarot Varquin",
			"entries": [
				"Pembacaan tarot adalah {@b inti Chapter ini}.",
				"Pemain dapat mengajukan pertanyaan spesifik atau menunjukkan item yang mereka miliki.",
				"Varquin akan mengocok kartu dan menafsirkan hasilnya sesuai kondisi pemain."
			]
		},
		{
			"type": "section",
			"name": "Variasi Pembacaan Tarot",
			"entries": [{
					"type": "entries",
					"name": "1. Jika Pemain Memiliki **Kenang-kenangan Pudar**",
					"entries": [
						"{@i (Kelereng dari Balapan Siput)}",
						"{@b Read-Aloud / Dialog Varquin:}",
						{
							"type": "inset",
							"entries": [
								"{@i \"Aku merasakan sesuatu... dari saku kalian. Kenangan yang hampir habis dimakan.\"}"
							]
						},
						"Varquin meletakkan kelereng di tengah meja, kartu-kartu mengelilinginya.",
						"{@b Kartu yang Muncul (Contoh):}",
						{
							"type": "list",
							"items": [
								"{@i The Hanged Man} (terbalik)",
								"{@i The Tower} (terbalik)"
							]
						},
						"{@b Interpretasi Varquin:}",
						{
							"type": "list",
							"items": [
								"Jiwa-jiwa tergantung dalam kehampaan",
								"Kekuasaan Belgruth rapuh dan palsu",
								"Ikatan terhadap {@creature Sylvia|MTW-VS} berasal dari {@b putus asa}, bukan rantai fisik"
							]
						},
						"{@b Clue Utama:}",
						"Belgruth mengikat Sylvia melalui {@b rasa putus asa}."
					]
				},
				{
					"type": "entries",
					"name": "2. Jika Pemain Memiliki **Liontin Kunci**",
					"entries": [
						"{@i (Dari Terowongan Gema Kenangan)}",
						"{@b Read-Aloud / Dialog Varquin:}",
						{
							"type": "inset",
							"entries": [
								"{@i \"Ah... melodi yang hampir lengkap.\"}"
							]
						},
						"Liontin diletakkan di tengah meja.",
						"{@b Kartu yang Muncul (Contoh):}",
						{
							"type": "list",
							"items": [
								"{@i The Empress}",
								"{@i The Lovers}",
								"{@i The Devil} (terbalik)"
							]
						},
						"{@b Interpretasi Varquin:}",
						{
							"type": "list",
							"items": [
								"Sylvia sebagai sumber kehidupan",
								"Ikatan cinta antara Sylvia & Juval",
								"Belgruth adalah pemutarbalik hasrat",
								"{@b Melodi harapan} adalah kunci pembebasan {@deity Vaeil|The Primordials|MTW}"
							]
						},
						"{@b Clue Utama:}",
						"Melodi yang disatukan dari terowongan adalah {@b kunci sejati}."
					]
				},
				{
					"type": "entries",
					"name": "3. Jika Pemain Tidak Memiliki Keduanya",
					"entries": [
						"{@b Kartu yang Muncul (Contoh):}",
						{
							"type": "list",
							"items": [
								"{@i The Hermit}",
								"{@i The Moon}"
							]
						},
						"{@b Interpretasi Varquin:}",
						{
							"type": "list",
							"items": [
								"Kebenaran tersembunyi dalam kesunyian",
								"Pemain perlu kembali ke wahana yang belum diselesaikan"
							]
						},
						"{@b Clue:}",
						"Dorongan eksplorasi ulang."
					]
				}
			]
		},
		{
			"type": "section",
			"name": "Informasi Tambahan dari Varquin (DM Notes)",
			"entries": [
				"Jika pemain bertanya langsung atau terlihat kebingungan, Varquin bisa mengungkap:",
				{
					"type": "list",
					"items": [
						"Sylvia dikurung di tenda besar di {@b panggung utama}",
						"Marionette {@creature Juval|MTW-VS} digerakkan oleh {@b pecahan kekuatan Vaelithra}",
						"Belgruth tumbuh kuat dari penderitaan {@creature Sylvia|MTW-VS}",
						"{@creature Sylvia|MTW-VS} {@b harus dibebaskan lebih dulu} sebelum Belgruth bisa dikalahkan"
					]
				}
			]
		},
		{
			"type": "section",
			"name": "Read-Aloud: Kata Penutup Varquin",
			"entries": [{
					"type": "inset",
					"entries": [
						"{@i Varquin mengumpulkan kartunya.}",
						"{@i \"Pedang dan mantra hanyalah alat,\" katanya pelan.}",
						"{@i \"Harapan... ingatan... dan cinta\u2014itulah yang benar-benar melukai kegelapan.\"}",
						"{@i \"Pergilah. Bebaskan dia... sebelum semuanya benar-benar pudar.\"}"
					]
				},
				"Aura tenda terasa lebih hangat saat kalian melangkah keluar."
			]
		},
		{
			"type": "section",
			"name": "End of Chapter",
			"entries": [
				"Pemain kini:",
				{
					"type": "list",
					"items": [
						"Memahami {@b cara menghadapi Belgruth}",
						"Menyadari pentingnya membebaskan Sylvia terlebih dahulu",
						"Siap menuju {@b panggung akhir sang dalang}"
					]
				},
				"➡️ {@b Next:} {@i Panggung Akhir Sang Dalang}"
			]
		}
	]
}
