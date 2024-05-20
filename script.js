document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Ambil nilai dari input
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    // Pastikan nilai input valid
    if (isNaN(number1) || isNaN(number2)) {
        alert('Masukkan bilangan bulat yang valid.');
        return;
    }

    // Hitung penjumlahan
    const sum = number1 + number2;

    // Tampilkan hasil
    document.getElementById('result').textContent = sum;
});


// Menambahkan event listener untuk tombol Clear
document.getElementById('clearButton').addEventListener('click', function() {
    // Mengosongkan nilai input
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    // Mengosongkan hasil penjumlahan
    document.getElementById('result').textContent = '0';
   
});
