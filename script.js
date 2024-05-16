function tambah() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var output = num1 + num2;
    document.getElementById('output').value = output;
    if (isNaN(output)) {
        document.getElementById('output').value = 'Nilai output tidak valid';
     } else {
        document.getElementById('output').value = output;
     }
 }

function kurang() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('output').value = num1 - num2;
    if (isNaN(output)) {
        document.getElementById('output').value = 'Nilai output tidak valid';
     } else {
        document.getElementById('output').value = output;
     }
}



function kali() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var output = num1 * num2;
    document.getElementById('output').value = output;
    if (isNaN(output)) {
        document.getElementById('output').value = 'Nilai output tidak valid';
     } else {
        document.getElementById('output').value = output;
     }
}

function bagi() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var output = num1 / num2;
    document.getElementById('output').value = output;
    if (isNaN(output)) {
       document.getElementById('output').value = 'Nilai output tidak valid';
    } else {
       document.getElementById('output').value = output;
    }
 }

 

// Ambil tombol atau elemen yang akan digunakan untuk mengganti tema
const themeButton = document.getElementById('toggleTheme');
const body = document.body;

// Tambahkan event listener untuk mengubah tema
toggleTheme.addEventListener('click', () => {
    // Ganti kelas CSS pada elemen body untuk mengubah tema
    body.classList.toggle('dark');
});
    




