// Tunggu hingga seluruh dokumen HTML selesai dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fungsionalitas Navigasi Responsif (Hamburger Menu)

    // Catatan: Untuk menjalankan ini, Anda perlu menambahkan tombol toggle (misalnya tombol hamburger) di HTML Anda.
    // Karena HTML awal belum memiliki tombol toggle, kita fokus pada fungsionalitas umum dulu.

    const headerNav = document.querySelector('header nav');
    const navUl = document.querySelector('header ul');

    // Asumsi: Kita akan membuat tombol toggle/hamburger menu di header
    // Tambahkan event listener untuk tombol toggle di sini jika sudah ada
    
    // Contoh sederhana: Menambahkan kelas 'responsive' ke nav saat diklik (walaupun belum ada tombolnya)
    // headerNav.addEventListener('click', function() {
    //     navUl.classList.toggle('responsive');
    // });


    // 2. Efek Scrolling Header (Mengubah tampilan saat scroll)

    const header = document.querySelector('header');
    
    // Fungsi yang akan dipanggil setiap kali pengguna menggulir halaman
    window.addEventListener('scroll', function() {
        // Cek posisi scroll vertikal
        if (window.scrollY > 50) {
            // Jika sudah scroll lebih dari 50px ke bawah, tambahkan kelas 'scrolled'
            header.classList.add('scrolled');
        } else {
            // Jika berada di bagian atas, hapus kelas 'scrolled'
            header.classList.remove('scrolled');
        }
    });

    // Catatan: Untuk melihat efek ini, Anda harus menambahkan CSS untuk kelas .scrolled di style.css!

    
    // 3. Fungsionalitas Lain (Contoh Placeholder untuk Galeri/Peta Interaktif)

    const mapSection = document.getElementById('map-container'); 
    
    if (mapSection) {
        console.log("Peta interaktif siap dimuat di halaman ini.");
        // Di sini Anda akan menginisialisasi peta (misalnya, menggunakan Leaflet atau Google Maps API)
        // Inisialisasi peta...
        // Tampilkan marker situs bersejarah...
    }


    // Pesan konfirmasi bahwa JavaScript telah dimuat
    console.log("Script Napak Tilas Sejarah Lokal berhasil dimuat.");
});