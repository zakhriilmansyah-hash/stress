// script.js (Kode yang sudah diperbaiki)

const pahlawanData = [
    {
        nama: "Ir. Soekarno",
        gelar: "Proklamator, Presiden Pertama RI",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Presiden_Sukarno.jpg/1418px-Presiden_Sukarno.jpg",
        biodata: [
            "Lahir: 6 Juni 1901 di Surabaya.",
            "Wafat: 21 Juni 1970 di Jakarta.",
            "Pendidikan: Technische Hoogeschool te Bandoeng (sekarang ITB)."
        ],
        jasa: [
            "Memproklamasikan Kemerdekaan RI pada 17 Agustus 1945.",
            "Penggagas Pancasila sebagai dasar negara.",
            "Memimpin Konferensi Asia-Afrika (KAA) dan mencetuskan Gerakan Non-Blok (GNB)."
        ]
    },
    {
        nama: "Mohammad Hatta",
        gelar: "Proklamator, Wakil Presiden Pertama RI",
        foto: "https://asset.kompas.com/crops/jHVs4cy8hbWngjOAmfAMqSm0dJA=/0x63:1024x746/1200x800/data/photo/2022/01/24/61ee89b518a46.jpeg",
        biodata: [
            "Lahir: 12 Agustus 1902 di Bukittinggi.",
            "Wafat: 14 Maret 1980 di Jakarta.",
            "Pendidikan: Handels Hoge School (Sekolah Tinggi Bisnis) di Rotterdam, Belanda."
        ],
        jasa: [
            "Memproklamasikan Kemerdekaan RI bersama Soekarno.",
            "Mengembangkan konsep Koperasi di Indonesia (dijuluki Bapak Koperasi).",
            "Memimpin delegasi Indonesia di Konferensi Meja Bundar (KMB) tahun 1949."
        ]
    },
    {
        nama: "R.A. Kartini",
        gelar: "Pelopor Kebangkitan Wanita Pribumi",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwj78eYFBl1AcqxL6Rd9QmLymR1rY4dLYg6A&s",
        biodata: [
            "Lahir: 21 April 1879 di Jepara.",
            "Wafat: 13 September 1904 di Rembang.",
            "Pekerjaan: Guru, Penulis surat-surat yang kemudian dibukukan menjadi 'Habis Gelap Terbitlah Terang'."
        ],
        jasa: [
            "Mendirikan sekolah untuk wanita pribumi di Jepara (Sekolah Wanita).",
            "Memperjuangkan kesetaraan dan emansipasi wanita di Indonesia.",
            "Pemikirannya menjadi inspirasi bagi pendidikan dan kemajuan kaum perempuan."
        ]
    },
    {
        nama: "B.J. Habibie",
        gelar: "Presiden Ketiga RI, Tokoh Dirgantara",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/B._J._Habibie%2C_President_of_Indonesia_portrait.jpg/500px-B._J._Habibie%2C_President_of_Indonesia_portrait.jpg",
        biodata: [
            "Lahir: 25 Juni 1936 di Parepare.",
            "Wafat: 11 September 2019 di Jakarta.",
            "Pendidikan: RWTH Aachen, Jerman (Spesialis konstruksi pesawat terbang)."
        ],
        jasa: [
            "Pengembangan industri pesawat terbang nasional (IPTN).",
            "Mencetuskan Teori Keretakan (Crack Propagation Theory) dalam ilmu penerbangan.",
            "Membawa Indonesia menuju transisi demokrasi (Reformasi) dengan cepat pada 1998."
        ]
    },
    {
        nama: "Sultan Hasanuddin",
        gelar: "Ayam Jantan dari Timur",
        // **PERBAIKAN SINTAKSIS:** URL foto ditutup dengan tanda petik ganda yang benar
        foto: "https://i.pinimg.com/474x/24/3c/c0/243cc0f355363b6f5a63e811fe15cd67.jpg",
        biodata: [
            "Lahir: 12 Januari 1631 di Gowa, Sulawesi Selatan.",
            "Wafat: 12 Juni 1670 di Gowa.",
            "Jabatan: Raja Kesultanan Gowa ke-16."
        ],
        jasa: [
            "Memimpin perlawanan sengit melawan Belanda (VOC) yang ingin memonopoli perdagangan.",
            "Menjaga kedaulatan Kerajaan Gowa dari upaya intervensi asing.",
            "Kekuatan militernya diakui oleh Belanda, yang menjulukinya 'Ayam Jantan dari Timur'."
        ]
    }
];

const container = document.querySelector('.container');

function createList(items) {
    let listHtml = '<ul>';
    items.forEach(item => {
        listHtml += `<li>${item}</li>`;
    });
    listHtml += '</ul>';
    return listHtml;
}

function createHeroCard(pahlawan) {
    const card = document.createElement('div');
    card.classList.add('hero-card');

    const biodataList = createList(pahlawan.biodata);
    const jasaList = createList(pahlawan.jasa);

    card.innerHTML = `
        <img src="${pahlawan.foto}" alt="Foto ${pahlawan.nama}" onerror="this.onerror=null;this.src='placeholder.jpg';">
        <div class="card-content">
            <h2>${pahlawan.nama}</h2>
            <p class="gelar">${pahlawan.gelar}</p>
            
            <div class="card-detail">
                <h3>Biodata Singkat:</h3>
                ${biodataList}

                <h3>Jasa Bagi Negara:</h3>
                ${jasaList}
            </div>
        </div>
    `;

    // Tambahkan event listener untuk menampilkan/menyembunyikan detail
    card.addEventListener('click', () => {
        card.classList.toggle('detailed');
    });

    return card;
}

// Render semua kartu ke dalam container
pahlawanData.forEach(pahlawan => {
    container.appendChild(createHeroCard(pahlawan));
});