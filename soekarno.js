// --- 1. Logika Tombol Kembali ke Atas (Back to Top) ---
const backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Tampilkan tombol jika scroll lebih dari 300px dari atas
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener('click', function() {
    // Smooth scrolling ke atas
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


// --- 2. Logika Scroll Reveal (Animasi saat elemen muncul) ---

const revealElements = document.querySelectorAll('.card, .kontribusi-item');

function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        // Dapatkan posisi elemen relatif terhadap viewport
        const elementTop = revealElements[i].getBoundingClientRect().top;
        // Tentukan titik trigger (misal: 150px dari bawah viewport)
        const revealPoint = 150; 

        if (elementTop < windowHeight - revealPoint) {
            // Jika elemen sudah melewati titik trigger, tambahkan class 'reveal'
            revealElements[i].classList.add('reveal');
        } 
        // Anda bisa menambahkan 'else' di sini untuk menghapus class 
        // jika elemen keluar dari viewport (jika Anda ingin animasi berulang)
    }
}

// Tambahkan event listener untuk menjalankan fungsi saat menggulir
window.addEventListener('scroll', revealOnScroll);

// Panggil sekali saat load agar elemen yang sudah ada di viewport langsung muncul
revealOnScroll();