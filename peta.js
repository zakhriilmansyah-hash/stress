document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-list a');
    const imageElement = document.getElementById('preview-img');
    const labelElement = document.getElementById('preview-label');
    
    let isAnimating = false;
    const TRANSITION_TIME = 400; // Sesuai dengan 0.4s di CSS

    // Fungsi utilitas untuk memperbarui konten (tanpa animasi)
    function setFrameContent(imgUrl, labelText) {
        imageElement.src = imgUrl;
        imageElement.alt = labelText;
        labelElement.textContent = labelText;
    }
    
    // Inisialisasi awal: Pastikan elemen terlihat saat dimuat
    imageElement.classList.add('fade-in');
    labelElement.classList.add('fade-in');

    // Event Listener untuk setiap tautan
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imgUrl = this.getAttribute('data-img');
            const newLabel = this.getAttribute('data-label');
            
            const currentLabel = labelElement.textContent;

            // Kunci animasi jika sedang berjalan atau jika konten sudah sama
            if (isAnimating || currentLabel === newLabel) {
                return;
            }

            isAnimating = true; // Kunci animasi aktif
            
            // 1. ANMASI KELUAR (Fade Out & Shrink)
            // Hapus kelas fade-in yang mungkin ada
            imageElement.classList.remove('fade-in');
            labelElement.classList.remove('fade-in');
            
            // Tambahkan kelas fade-out (memicu transisi keluar)
            imageElement.classList.add('fade-out');
            labelElement.classList.add('fade-out');
            
            // 2. TUNGGU transisi keluar selesai (400ms)
            setTimeout(() => {
                
                // Ganti konten saat elemen tidak terlihat (opacity: 0)
                setFrameContent(imgUrl, newLabel);
                
                // 3. ANMASI MASUK (Fade In & Scale Up)
                // Hapus kelas fade-out
                imageElement.classList.remove('fade-out');
                labelElement.classList.remove('fade-out');

                // Memicu reflow browser (mencegah kedipan)
                void imageElement.offsetWidth;
                
                // Tambahkan fade-in class (memicu transisi masuk)
                imageElement.classList.add('fade-in');
                labelElement.classList.add('fade-in');
                
                // Reset flag animasi setelah transisi masuk selesai
                setTimeout(() => {
                    isAnimating = false;
                }, TRANSITION_TIME);
                
            }, TRANSITION_TIME);
        });
    });
});