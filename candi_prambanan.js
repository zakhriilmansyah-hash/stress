document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan semua header zona (h4 dengan class .zone-header)
    const zoneHeaders = document.querySelectorAll('.zone-header');

    zoneHeaders.forEach(header => {
        // Dapatkan elemen konten yang terkait (.zone-content)
        const content = header.nextElementSibling;

        // Tambahkan event listener saat header diklik
        header.addEventListener('click', function() {

            // Periksa status aktif saat ini
            const isActive = content.classList.contains('active');

            // 2. Tutup semua accordion yang sedang terbuka
            zoneHeaders.forEach(otherHeader => {
                otherHeader.nextElementSibling.classList.remove('active');
                otherHeader.classList.remove('active');
            });

            // 3. Jika sebelumnya tidak aktif, buka dan tandai yang diklik
            if (!isActive) {
                content.classList.add('active');
                header.classList.add('active');
            }
        });
    });

    console.log("Interaktivitas Candi Prambanan siap!");
});