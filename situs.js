document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-list a');
    const previewImage = document.getElementById('previewImage');
    const imageLabel = document.getElementById('imageLabel');

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imageUrl = this.getAttribute('data-img');
            const labelText = this.getAttribute('data-label');

            // 1. Sembunyikan label dan gambar lama
            imageLabel.style.opacity = '0';
            previewImage.style.opacity = '0';

            // 2. Ganti sumber gambar setelah transisi opacity berjalan
            // Ini menciptakan efek fade-out/fade-in yang halus
            setTimeout(() => {
                previewImage.src = imageUrl;
                imageLabel.textContent = labelText;
                
                // 3. Tampilkan gambar baru
                previewImage.style.opacity = '1';
                imageLabel.style.opacity = '0'; // Pastikan label default tetap tersembunyi saat gambar tampil
            }, 200); 
        });

        link.addEventListener('mouseleave', function() {
            // Saat kursor meninggalkan tautan, tampilkan gambar baru
            previewImage.style.opacity = '0';

        
           
        });
    });

    console.log("Interaktivitas pratinjau foto siap!");
});