export const Part4Section = {
	"type": "section",
	"name": "**Chapter 3: Balapan Siput Raksasa Old Man Thoraq**",
	"entries": [{
			"type": "entries",
			"name": "Running This Chapter",
			"entries": [
				"Chapter ini memperkenalkan atraksi kedua di karnaval: Balapan Siput Raksasa. Pemain akan bertemu dengan Old Man Thoraq, sang penjaga arena yang unik. Mekanik utama di sini adalah pemain akan menyusut dan menunggangi siput balap, lalu harus menggunakan \"gigitan\" tiket mereka untuk memotivasi siput melalui teka-teki balapan yang melibatkan interaksi dengan lingkungan kecil dan memahami sifat siput. Pastikan untuk membangun suasana yang aneh namun menyenangkan di arena ini."
			]
		},
		{
			"type": "section",
			"name": "Balapan Siput Raksasa Old Man Thoraq",
			"entries": [{
					"type": "entries",
					"name": "Read-Aloud: Menemukan Arena Balapan Siput",
					"entries": [{
						"type": "inset",
						"entries": [
							"\"Kalian berdiri di ambang gerbang Karnaval Violet. Dari balik gerbang yang dihiasi lampu-lampu ungu menari, muncul seorang pria dengan pakaian bak seorang dalang. Senyum tipis terukir di wajahnya yang terlihat ramah, namun matanya memancarkan kesedihan yang dalam, seolah membawa beban ribuan kenangan. Di sampingnya, seorang wanita berpenampilan badut, dengan pakaian yang lebih sederhana namun tetap mencolok, ikut berdiri. Senyumnya terasa lebih hangat, meskipun tatapannya penuh rahasia.",
							"Pria itu, sang dalang, melambaikan tangannya dengan gerakan kaku. \"Selamat datang di Karnaval Violet. Semoga kunjungan kalian... membawa warna. Ada begitu banyak hal indah yang menunggu untuk ditemukan... atau diselamatkan.\" Suaranya terdengar manis, namun ada nada dingin yang terselip, seolah ada pesan tersembunyi yang tak terucapkan.",
							"Wanita badut di sampingnya mengangguk singkat pada kalian. \"Petualangan baru... selalu menarik. Jika kalian merasa tersesat dalam pusaran kegembiraan ini, tenda ramalanku selalu terbuka. Tapi... nikmati dulu wahana-wahana yang berputar. Ada banyak rahasia yang tersembunyi di baliknya.\" Ia lalu melangkah anggun, menjauh dari gerbang sampai tak terlihat.",
							"Sang dalang hanya tersenyum samar, pandangannya menyapu kalian, lalu perlahan ia membalikkan badan, berjalan pergi ke arah kedalaman karnaval, meninggalkan kalian di ambang gerbang."
						]
					}]
				},
				{
					"type": "entries",
					"name": "DM Notes: Pengenalan Old Man Thoraq & Arena",
					"entries": [{
						"type": "list",
						"items": [
							"{@b Old Man Thoraq:} Dia adalah karakter yang misterius tapi tidak agresif. Dia akan bicara dengan sedikit menggerutu tapi ramah. Dia tidak akan menyebut namanya sendiri secara langsung, tapi pemain bisa mendengarnya dari pengunjung lain atau jika melakukan Perception/Insight check (DC 13) pada piala-piala di mejanya yang mungkin bertuliskan \"Thoraq's Snail Race\".",
							"{@b Arena:} Deskripsikan lintasan yang lurus, mungkin ada garis {@i start} dan {@i finish} yang jelas. Di sekitar arena, mungkin ada beberapa Gluttonette kecil yang pasif, bertindak sebagai penonton diam.",
							"{@b Siput:} Tekankan bahwa siputnya {@i kecil} dan {@i didandani}. Deskripsi ini penting untuk membangun efek penyusutan nanti.",
							"{@b Piala:} Piala-piala di meja Thoraq mungkin berisi nama-nama pemenang aneh atau bahkan ukiran-ukiran kecil yang menyerupai simbol-simbol tertentu (clue masa depan?)."
						]
					}]
				},
				{
					"type": "entries",
					"name": "Read-Aloud: Tawaran Old Man Thoraq & Pemilihan Siput",
					"entries": [{
						"type": "inset",
						"entries": [
							"\"Kakek tua itu tersenyum lebar, menunjukkan gigi-giginya yang jarang. \"Ah, pengunjung baru! Tertarik dengan kecepatan? Ini Balapan Siput Raksasa Thoraq! Sepuluh kontestan terbaik siap melaju. Pilih satu siput favoritmu, berikan hadiah tiketmu, dan rasakan sensasi melaju {@i di atas} sang juara!\"",
							"\"Jangan ragu, mereka semua adalah bintang!\" Ia menunjuk ke arah barisan siput-siput kecil yang didandani itu. \"Tiga puluh inci garis lurus! Yang pertama sampai ujung, dialah pemenangnya! Hadiahnya... oh, rahasia! Tapi dijamin sepadan dengan usahamu!\" Ia tertawa kecil, \"Glek-glek-glek.\""
						]
					}]
				},
				{
					"type": "entries",
					"name": "DM Notes: Memilih Siput & Tiket Gigitan",
					"entries": [{
							"type": "list",
							"items": [
								"{@b Pemilihan Siput:} Minta setiap pemain melempar 1d10. Cocokkan hasilnya dengan tabel di bawah untuk menentukan siput pilihan mereka.",
								"**Tabel Siput Balap (DM Only - Bacakan deskripsi penampilannya kepada pemain):"
							]
						},
						{
							"type": "table",
							"colLabels": [
								"1d10",
								"Nama Siput (DM Only)",
								"Penampilan/Dandanan",
								"Clue/Motivasi Rahasia (DM Info, untuk dibisikkan ke pemain atau ditemukan melalui Insight/Nature check)"
							],
							"colStyles": [
								"col-1 text-center",
								"col-1 text-center",
								"col-4",
								"col-6"
							],
							"rows": [
								[
									"1",
									"Bintang Kecil",
									"Cangkang biru gelap bertabur glitter perak, ada bendera kecil motif bulan.",
									"Ia merindukan sorotan. Bisikan cahaya dari bintang-bintang di angkasa. Puji dia, sentuh bagian glitter cangkangnya. (Advantage on Animal Handling jika dipuji / ditarik ke area lebih terang)"
								],
								[
									"2",
									"Kembang Desa",
									"Cangkang merah muda dengan hiasan kelopak bunga mawar mini.",
									"Jiwanya haus akan keharuman yang membangkitkan taman yang terlupakan. Cari aroma manis bunga atau parfum, dan ia akan melaju. (Advantage on Animal Handling jika ada aroma wangi/bunga di dekatnya)"
								],
								[
									"3",
									"Si Gesit",
									"Cangkang hijau terang dengan garis-garis balap hitam.",
									"Ia terburu-buru, seolah ada sesuatu yang mengejarnya dari belakang. Jalur yang bersih sempurna, jauh dari jejak-jejak yang kotor, akan membuatnya tenang. (Advantage on Animal Handling jika jalur di depannya bersih)"
								],
								[
									"4",
									"Pembawa Hujan",
									"Cangkang abu-abu gelap, tubuhnya selalu sedikit lembab.",
									"Setiap tetes adalah nafas, sebuah kerinduan akan keheningan yang basah. Ia melaju cepat menuju sumber air. (Advantage on Animal Handling jika ada air/kelembaban di depannya)"
								],
								[
									"5",
									"Penguasa Bayangan",
									"Cangkang hitam pekat dengan ornamen jaring laba-laba kecil.",
									"Hanya dalam pelukan bayangan, rahasia-rahasia bisa terungkap. Ia bersembunyi dari sorotan, melaju nyaman di area gelap. (Advantage on Animal Handling jika berada di area gelap/bayangan)"
								],
								[
									"6",
									"Raja Aroma",
									"Cangkang oranye gelap, mengeluarkan bau manis seperti buah busuk.",
									"Panggillah dengan aroma yang membangkitkan selera, pancing nafsu yang tak pernah kenyang. Buah-buahan manis yang membusuk adalah kesukaannya. (Advantage on Animal Handling jika ada makanan manis/busuk)"
								],
								[
									"7",
									"Pemikir",
									"Cangkang coklat tua, matanya terlihat besar dan sering melirik.",
									"Setiap langkah adalah refleksi, jangan buru-buru ingatan yang berputar. Ia membenci paksaan, melaju dengan kehati-hatian. (Advantage on Animal Handling jika pemain bersabar / tidak terlalu mendesak)"
								],
								[
									"8",
									"Si Pemberani",
									"Cangkang merah cerah dengan helm mini dari tempurung kenari.",
									"Api keberanian butuh percikan. Doronglah jiwanya melampaui batas yang terlihat, tunjukkan jalan berbahaya yang aman. (Advantage on Animal Handling jika diberi perintah \"berani\" / melewati rintangan kecil)"
								],
								[
									"9",
									"Penjaga Rahasia",
									"Cangkang ungu misterius, selalu sedikit bersembunyi.",
									"Bisikan rahasia, sentuhan lembut. Teriakkan akan membuat jiwanya bersembunyi semakin dalam. Ia akan melaju jika merasa aman. (Advantage on Animal Handling jika pemain berbicara lembut / menenangkan)"
								],
								[
									"10",
									"Pelari Mimpi",
									"Cangkang putih mutiara, seolah mengambang.",
									"Lantunkan lagu yang terlupakan, panggil mimpi yang tertidur di antara bintang-bintang. Melodi atau bisikan lembut akan membangkitkannya. (Advantage on Animal Handling jika pemain bersenandung / membisikkan)"
								]
							]
						},
						{
							"type": "list",
							"items": [
								"{@b Mekanik Gigitan Tiket:}",
								{
									"type": "list",
									"items": [
										"{@i Read-Aloud:} \"Setelah kalian memilih siput (atau dadu kalian memilihkan!), Old Man Thoraq mengulurkan tangan. 'Ya, ya! Sekarang, berikan dia... janji kemenanganmu!' Saat kalian menggigit tiket, sensasi dingin menusuk menjalar, dan bekas gigitan berkilauan muncul. Tiket kalian terasa satu gigitan telah terpakai.\""
									]
								},
								"{@b Efek Penyusutan:}",
								{
									"type": "list",
									"items": [
										"{@i Read-Aloud:} \"Tiba-tiba, pandangan kalian berputar! Lantai mendadak menjauh, dan dunia di sekitar kalian membesar dengan kecepatan yang membingungkan. Siput pilihan kalian, yang tadi hanya sebesar jempol, kini menjulang tinggi di hadapan kalian, cangkangnya setinggi kepala gajah! Dengan sensasi aneh, kalian merasa ditarik dan didudukkan dengan nyaman di atas cangkang siput raksasa itu, seolah sadel empuk telah terbentuk khusus untuk kalian. Old Man Thoraq di kejauhan tampak seperti raksasa, dan bahkan butiran pasir di lintasan kini sebesar kerikil. Kalian telah menyusut dan siap menunggangi siput kalian!\""
									]
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "DM Notes: Puzzle Balapan Siput - Manuver & Membaca Keinginan Siput",
					"entries": [{
						"type": "list",
						"items": [
							"{@b Kondisi Awal:} Kalian berada di lintasan, berukuran kecil, {@i menunggangi} siput pilihan. Old Man Thoraq akan memulai hitungan mundur dari kejauhan.",
							"{@b Tujuan Puzzle:} Memenangkan balapan dengan mencari tahu apa yang paling efektif memotivasi siput kalian untuk bergerak, {@i sambil bermanuver di atasnya}.",
							"{@b Mekanisme Per Ronde:}",
							{
								"type": "list",
								"items": [
									"Setiap ronde, pemain bisa melakukan satu {@i Tindakan} (Action) dan satu {@i Bonus Action}.",
									"{@b Tindakan Wajib (Manuver Dasar):} Lakukan roll {@b Animal Handling (DC 15)}. Ini untuk {@i manuver} dan {@i mengarahkan} siput.",
									{
										"type": "list",
										"items": [
											"{@b Berhasil (15+):} Siput maju 5 inci.",
											"{@b Nat 20:} Siput maju 10 inci.",
											"{@b Gagal (di bawah 15):} Siput terdiam.",
											"{@b Nat 1:} Siput mundur 5 inci."
										]
									}
								]
							},
							"{@b Puzzle (Bonus Action/Tindakan Tambahan):} Pemain bisa melakukan hal lain yang kreatif untuk berinteraksi dengan siput atau lingkungan {@i dari atas siput}, ini akan mempengaruhi roll Animal Handling mereka.",
							"{@b Petunjuk & Interaksi Lingkungan Kecil (Sekarang Terlihat Besar):}",
							{
								"type": "list",
								"items": [
									"{@b Lintasan Tidak Polos:} Lintasan 30 inci itu mungkin memiliki detail kecil yang kini terlihat besar bagi kalian:",
									{
										"type": "list",
										"items": [
											"{@b Genangan Lendir Kering:} Beberapa bagian lintasan mungkin ada genangan lendir siput yang sudah mengering dan lengket. (Butuh Nature check DC 12 untuk tahu cara terbaik melewatinya, atau Sleight of Hand DC 14 untuk mencoba membersihkan jalur {@i dari atas siput}).",
											"{@b Cahaya Terang / Bayangan:} Beberapa titik di lintasan mungkin lebih terang (karena celah di atap) atau lebih gelap (karena tumpukan sampah karnaval yang kini terlihat seperti gunung).",
											"{@b Puing-puing Kecil:} Kerikil kecil, remah makanan, atau sisa dekorasi yang kini seukuran batu besar."
										]
									}
								]
							},
							"{@b Mengamati Siput (Perception / Investigation DC 12):} Mengamati reaksi siput terhadap lingkungan atau {@i dandanannya} (misal, topi bunga matahari yang menghadap cahaya, atau cangkang gelap yang menghindari terang). Ini bisa memberikan {@i clue} lebih lanjut tentang sifat siputnya.",
							"{@i *Mencoba Memotivasi Siput (Pilih salah satu per ronde - }dari atas cangkang{@i ):*}",
							{
								"type": "list",
								"items": [
									"{@b Membujuk (Persuasion / Performance DC 13):} Mengajak bicara, memuji, bersenandung, atau bahkan mengancam (Intimidation DC 13) siput kalian {@i dari atas cangkangnya}.",
									"{@b Mengarahkan Lingkungan (Nature / Sleight of Hand DC 14):} Mencoba mendorong puing dengan tangan, membuat sedikit bayangan dengan jubah, atau meneteskan sedikit air (jika ada sumber air dari botol minum yang juga menyusut) di depannya.",
									"{@b Menawarkan Insentif (Sleight of Hand / Survival DC 15):} Jika pemain punya sisa makanan kecil/parfum di kantong yang ikut menyusut, bisa ditawarkan di depan mata siput (cek dulu apa jenis insentif yang disukai siput dari Insight/Nature check)."
								]
							},
							"{@b Efek Puzzle pada Balapan:}",
							{
								"type": "list",
								"items": [
									"{@b Siput Merespons Positif (Berhasil Puzzle):} Jika pemain melakukan tindakan yang {@i cocok} dengan sifat siputnya (lihat tabel \"Clue/Motivasi Rahasia\"), dan roll skillnya berhasil:",
									{
										"type": "list",
										"items": [
											"Siput mendapatkan {@b Advantage} pada roll Animal Handling di ronde itu.",
											"{@b DAN} jika roll Animal Handling berhasil, siput maju {@b +5 inci tambahan} (total bisa 10 atau 15 inci)."
										]
									}
								]
							},
							"{@b Siput Merespons Negatif (Gagal Puzzle / Tindakan Salah):} Jika pemain melakukan tindakan yang {@i berlawanan} dengan sifat siputnya, dan roll skillnya gagal:",
							{
								"type": "list",
								"items": [
									"Siput mendapatkan {@b Disadvantage} pada roll Animal Handling di ronde itu.",
									"{@b DAN} jika roll Animal Handling gagal, siput maju {@b -5 inci tambahan} (mundur total 10 inci) atau bahkan terdiam total jika dia sudah gagal roll AN."
								]
							},
							"{@b Tidak Melakukan Puzzle:} Hanya Animal Handling biasa (maju 5, Nat 20 = 10, Nat 1 = -5)."
						]
					}]
				},
				{
					"type": "entries",
					"name": "DM Notes: Akhir Balapan & Hadiah",
					"entries": [{
						"type": "list",
						"items": [
							"{@b Pemenang:} Pemain yang siputnya mencapai garis {@i finish} (30 inci) duluan adalah pemenangnya.",
							"{@b Reaksi Old Man Thoraq:}",
							{
								"type": "list",
								"items": [
									"{@i Read-Aloud (jika pemain menang):} \"Kakek Thoraq menganga tak percaya, lalu senyumnya melebar. 'Luar biasa! Siputmu... benar-benar juara! Jarang sekali ada yang bisa membaca hati siput dan bermanuver sebaik itu!' Dia tertawa \"Glek-glek-glek\" lagi, lalu mengulurkan tangannya yang keriput. 'Ini, ambillah hadiahmu, anak muda. Sebuah... {@b Kenang-kenangan Pudar}.'\"",
									"{@b Hadiah:} Old Man Thoraq menyerahkan sebuah kelereng kaca kusam yang terlihat tua dan di dalamnya terukir samar simbol Archive of Vaeil, tapi tidak terlalu jelas. Kelereng ini bisa disimpan pemain.",
									{
										"type": "list",
										"items": [
											"{@b Efek Kelereng (DM Note):} Jika pemain menatapnya atau melakukan Arcana/History (DC 15), mereka bisa mendapatkan {@i fragmen bisikan} tentang Gluttonette atau kutukan memudar yang melanda ingatan pengunjung karnaval. Contoh: \"Jiwa yang hilang... memudar seperti kenangan... mengisi perut yang tak pernah kenyang.\" Atau \"Mereka yang memakan... takkan pernah kenyang. Hanya kehampaan.\""
										]
									}
								]
							},
							"{@i Read-Aloud (jika pemain kalah):} \"Kakek Thoraq menghela napas, menggelengkan kepalanya. 'Ah, sayang sekali. Belum beruntung. Tapi jangan khawatir, selalu ada balapan lain!' Dia menyeringai, 'Sampai jumpa lain waktu!'\"",
							"{@b Kembali Normal:} Setelah balapan selesai, efek menyusut akan otomatis hilang.",
							{
								"type": "list",
								"items": [
									"{@i Read-Aloud:} \"Tiba-tiba, dunia di sekitar kalian berputar lagi, lalu kembali ke ukuran semula. Siput-siput mungil itu kembali menjadi kecil di cangkangnya, dan Old Man Thoraq kembali menjadi kakek tua satu kaki di depan meja piala-pialanya.\""
								]
							}
						]
					}]
				}
			]
		}
	]
}
