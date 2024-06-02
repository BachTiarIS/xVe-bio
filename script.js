function tambah() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var output = num1 + num2;
    if (isNaN(output)) {
        document.getElementById('output').value = 'Nilai output tidak valid';
    } else {
        document.getElementById('output').value = output;
    }
}

function kurang() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var output = num1 - num2;
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
    if (isNaN(output)) {
        document.getElementById('output').value = 'Nilai output tidak valid';
    } else {
        document.getElementById('output').value = output;
    }
}

// Fungsi untuk mengganti tema
const themeButton = document.getElementById('toggleTheme');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Fungsi untuk menyembunyikan semua project
function hideAll() {
    const projects = ['project1', 'project2', 'project3', 'project4'];
    projects.forEach(projectId => {
        const project = document.getElementById(projectId);
        if (project) {
            project.style.display = "none";
        }
    });
}

// Fungsi untuk menampilkan hanya project yang diinginkan
function showProject(projectId) {
    hideAll(); // Pertama, sembunyikan semua project
    const project = document.getElementById(projectId);
    if (project) {
        project.style.display = "block"; // Kemudian tampilkan project yang diinginkan
    }
}
