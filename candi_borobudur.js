document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan semua header zona
    const zoneHeaders = document.querySelectorAll('.zone-header');

    zoneHeaders.forEach(header => {
        // Dapatkan elemen konten yang terkait (element setelah header dalam div yang sama)
        // Kita menggunakan nextElementSibling karena header dan content berada dalam div.zone-accordion yang sama.
        const content = header.nextElementSibling;

        // Tambahkan event listener saat header diklik
        header.addEventListener('click', function() {
            
            // Periksa apakah konten yang diklik saat ini aktif
            const isActive = content.classList.contains('active');

            // 2. Tutup semua accordion (Collapsing all)
            zoneHeaders.forEach(otherHeader => {
                otherHeader.nextElementSibling.classList.remove('active');
                otherHeader.classList.remove('active');
            });
            
            // 3. Jika tidak aktif, buka yang diklik (Toggling the clicked one)
            if (!isActive) {
                content.classList.add('active');
                header.classList.add('active');
            }
        });
    });

    console.log("Struktur Borobudur telah diinisialisasi dan siap digunakan.");
});