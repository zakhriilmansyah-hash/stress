// 1. DATA PERISTIWA (Dibuat sebagai array objek)
const eventsData = [
    {
        id: 1,
        date: "Abad ke-4 Masehi",
        title: "Kerajaan Kutai Berdiri",
        summary: "Kerajaan Hindu tertua di Indonesia, menandai awal sejarah kerajaan.",
        details: "Ditemukan prasasti Yupa, membuktikan adanya kerajaan bercorak Hindu pertama yang terpusat di Kalimantan Timur.",
        era: "kerajaan",
        tags: ["Hindu", "Kerajaan Tertua", "Kalimantan"]
    },
    {
        id: 2,
        date: "Abad ke-7 - 13",
        title: "Masa Keemasan Sriwijaya",
        summary: "Kerajaan maritim Buddha terbesar yang menguasai jalur perdagangan di Selat Malaka.",
        details: "Sriwijaya menjadi pusat penyebaran agama Buddha dan pusat perdagangan internasional di Asia Tenggara.",
        era: "kerajaan",
        tags: ["Buddha", "Maritim", "Sumatera"]
    },
    {
        id: 3,
        date: "1596",
        title: "Kedatangan Cornelis de Houtman",
        summary: "Pelaut Belanda pertama kali tiba di Banten, menandai dimulainya era kolonial.",
        details: "Kedatangan ini membuka jalan bagi pendirian VOC dan dominasi Belanda atas Nusantara.",
        era: "penjajahan",
        tags: ["Belanda", "Banten", "Kolonialisme"]
    },
    {
        id: 4,
        date: "1908",
        title: "Lahirnya Budi Utomo",
        summary: "Tonggak awal Pergerakan Nasional Indonesia melalui organisasi modern.",
        details: "Didirikan oleh pelajar STOVIA, Budi Utomo mendorong kesadaran nasional melalui pendidikan dan budaya.",
        era: "penjajahan",
        tags: ["Pergerakan Nasional", "Organisasi", "Edukasi"]
    },
    {
        id: 5,
        date: "28 Oktober 1928",
        title: "Sumpah Pemuda",
        summary: "Ikrar satu tanah air, satu bangsa, dan satu bahasa Indonesia.",
        details: "Menciptakan identitas nasional yang kuat dan mempersatukan berbagai organisasi pemuda daerah.",
        era: "penjajahan",
        tags: ["Persatuan", "Bahasa Indonesia", "Kongres Pemuda"]
    },
    {
        id: 6,
        date: "17 Agustus 1945",
        title: "Proklamasi Kemerdekaan",
        summary: "Pernyataan resmi kemerdekaan Republik Indonesia dari penjajahan.",
        details: "Dibacakan oleh Soekarno dan Hatta di Jakarta, didahului oleh peristiwa Rengasdengklok.",
        era: "kemerdekaan",
        tags: ["Kemerdekaan", "Soekarno-Hatta", "1945"]
    },
    {
        id: 7,
        date: "10 November 1945",
        title: "Pertempuran Surabaya",
        summary: "Puncak perlawanan rakyat terhadap tentara Sekutu/Belanda, kini diperingati sebagai Hari Pahlawan.",
        details: "Insiden heroik yang melibatkan Bung Tomo dan menewaskan Jenderal Mallaby.",
        era: "kemerdekaan",
        tags: ["Revolusi Fisik", "Hari Pahlawan", "Jawa Timur"]
    },
    {
        id: 8,
        date: "1955",
        title: "Konferensi Asia-Afrika (KAA)",
        summary: "Indonesia menjadi tuan rumah pertemuan negara-negara Asia dan Afrika di Bandung.",
        details: "Meluncurkan Dasasila Bandung, menjadi landasan bagi Gerakan Non-Blok (GNB).",
        era: "orde",
        tags: ["Bandung", "Politik Global", "Non-Blok"]
    },
    {
        id: 9,
        date: "11 Maret 1966",
        title: "Surat Perintah Sebelas Maret (Supersemar)",
        summary: "Peralihan kekuasaan dari Soekarno ke Jenderal Soeharto, menandai akhir Orde Lama.",
        details: "Surat kontroversial yang menjadi dasar bagi Soeharto untuk membubarkan PKI dan memulai Orde Baru.",
        era: "orde",
        tags: ["Soeharto", "Orde Baru", "G30S"]
    },
    {
        id: 10,
        date: "Mei 1998",
        title: "Awal Era Reformasi",
        summary: "Demonstrasi besar-besaran dan lengsernya Presiden Soeharto setelah 32 tahun berkuasa.",
        details: "Dipicu oleh krisis ekonomi dan kerusuhan, mengantar Indonesia ke era demokrasi multipartai.",
        era: "orde",
        tags: ["Reformasi", "Krisis Moneter", "Demokrasi"]
    }
];

const timelineContainer = document.getElementById('timeline-container');
const modal = document.getElementById('event-modal');
const closeModal = document.querySelector('.close-button');

// 2. FUNGSI UTAMA: MEMUAT GARIS WAKTU
function loadTimeline(events) {
    timelineContainer.innerHTML = ''; // Kosongkan container
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.setAttribute('data-era', event.era);
        
        // Membangun konten HTML untuk setiap peristiwa
        eventElement.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div class="event-title">${event.title}</div>
            <p class="event-summary">${event.summary}</p>
            <div class="event-tags">
                ${event.tags.map(tag => `<span class="tag tag-era-${event.era}">${tag}</span>`).join('')}
            </div>
        `;
        
        // FITUR: Event listener untuk membuka modal (interaktif)
        eventElement.addEventListener('click', () => openModal(event));
        
        timelineContainer.appendChild(eventElement);
    });
}

// 3. FUNGSI: FILTER DAN PENCARIAN (FITUR)
function filterTimeline() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const eraFilter = document.getElementById('era-filter').value;

    const filteredEvents = eventsData.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) || 
                              event.summary.toLowerCase().includes(searchTerm) ||
                              event.details.toLowerCase().includes(searchTerm);
        
        const matchesEra = eraFilter === 'all' || event.era === eraFilter;

        return matchesSearch && matchesEra;
    });

    loadTimeline(filteredEvents);
}


// 4. FUNGSI: MODAL DETAIL (FITUR)
function openModal(event) {
    document.getElementById('modal-title').textContent = event.title;
    document.getElementById('modal-date').textContent = event.date;
    document.getElementById('modal-description').textContent = event.details;
    
    // Memuat ulang tags di modal
    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = event.tags.map(tag => `<span class="tag tag-era-${event.era}">${tag}</span>`).join('');

    modal.style.display = 'block';
}

function closeModalHandler() {
    modal.style.display = 'none';
}

// 5. EVENT LISTENERS
// Tutup modal ketika tombol X diklik
closeModal.addEventListener('click', closeModalHandler);

// Tutup modal ketika user klik di luar modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModalHandler();
    }
});

// FITUR: Scroll-to-Timeline saat link filter di klik
document.getElementById('open-filter').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('filter-container').scrollIntoView({ behavior: 'smooth' });
});

// Inisialisasi: Muat semua data saat halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', () => {
    loadTimeline(eventsData);
});