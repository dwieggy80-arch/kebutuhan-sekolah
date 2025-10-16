// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- EFEK NAVIGASI SAAT SCROLL ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Saat di-scroll ke bawah lebih dari 50px, tambahkan shadow
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            // Kembali ke style semula jika di atas
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // --- FUNGSI KERANJANG BELANJA (CART) SEDERHANA ---
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartCounter = document.querySelector('.cart-counter');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Tambah jumlah item
            cartItemCount++;
            
            // Update tampilan counter di ikon keranjang
            cartCounter.textContent = cartItemCount;

            // Beri feedback visual ke pengguna
            button.textContent = 'Ditambahkan!';
            button.style.backgroundColor = '#2ecc71'; // Warna hijau

            // Kembalikan teks tombol setelah beberapa saat
            setTimeout(() => {
                button.textContent = 'Tambah ke Keranjang';
                button.style.backgroundColor = 'var(--secondary-color)';
            }, 1500); // 1.5 detik
            
            // Animasi kecil pada ikon keranjang
            const cartIcon = document.getElementById('cart-icon');
            cartIcon.classList.add('shake');
            setTimeout(() => {
                cartIcon.classList.remove('shake');
            }, 500);
        });
    });
});

// Tambahkan sedikit CSS untuk animasi goyang (shake) pada ikon keranjang
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
}
.shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}
`;
document.head.appendChild(style);
