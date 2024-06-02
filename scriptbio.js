// Function untuk menyembunyikan semua project
function hideAll() {
    console.log('Menyembunyikan semua project...');
    const projects = ['project1', 'project2', 'project3', 'project4'];
    projects.forEach(projectId => {
        const project = document.getElementById(projectId);
        if (project) {
            project.style.display = "none";
            console.log(`${projectId} disembunyikan.`);
        } else {
            console.log(`Elemen ${projectId} tidak ditemukan.`);
        }
    });
}
hideAll()


// Function untuk menampilkan hanya project yang diinginkan
function showProject(projectId) {
    hideAll(); // Pertama, sembunyikan semua project
    const project = document.getElementById(projectId);
    if (project) {
        project.style.display = "block"; // Kemudian tampilkan project yang diinginkan
    } 
}

// Penggunaan
document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = ['pj1', 'pj2', 'pj3', 'pj4'];
    projectButtons.forEach((buttonId, index) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                showProject('project' + (index + 1));
            });
        }
    });
});


