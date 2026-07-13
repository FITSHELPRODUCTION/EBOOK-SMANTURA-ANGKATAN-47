document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById('book');
    const totalHalaman = 149; // Lo cukup ganti angka ini kalau halamannya nambah
    
    // 1. GENERATE HALAMAN OTOMATIS
    // JavaScript bakal bikin elemen div dan masukin gambar hal1.jpg sampai hal149.jpg
    for (let i = 1; i <= totalHalaman; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'my-page'; // Ngikutin style CSS kita
        
        const img = document.createElement('img');
        img.src = `gambar/hal${i}.jpg`; // Pastiin nama filenya bener dan ada di folder 'gambar'
        
        pageDiv.appendChild(img);
        bookElement.appendChild(pageDiv);
    }

    // 2. AKTIFIN EFEK BUKU MELENGKUNG (StPageFlip)
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
    width: 400, // Lebar halaman
    height: 600, // Tinggi halaman
    size: "fixed", // Pakai ukuran tetap
    showCover: true,
    usePortrait: true, // INI KUNCINYA: Paksa mode 1 halaman terus
    mobileViewSupport: true // Biar di HP juga enak
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
    // 3. FUNGSI TOMBOL NAVIGASI
    document.getElementById('nextBtn').addEventListener('click', () => {
        pageFlip.flipNext(); // Perintah otomatis dari library buat buka halaman selanjutnya
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        pageFlip.flipPrev(); // Perintah otomatis buat balik halaman
    });
});
