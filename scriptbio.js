

// function project1-4
// Function untuk menyembunyikan semua project
function HideALL(){
    document.getElementById('project1').style.display = "none";
    document.getElementById('project2').style.display = "none";
    document.getElementById('project3').style.display = "none";
    document.getElementById('project4').style.display = "none";
}


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
    hideAll();
    const project = document.getElementById(projectId);
    if (project) {
        project.style.display = "block"; 
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
                HideNavbar()
                document.getElementById('menu').style.display = 'block';
            });
        }
    });
});
// end of code

// F navbar
function HideNavbar() {
    document.getElementById("navbar1").style.display = "none";
}

HideNavbar()

function ShowNav(){
    document.getElementById("navbar1").style.display = "block";
}

document.getElementById('menu').addEventListener('click', function() {
    var menu = document.getElementById('navbar1');
    if (navbar1.style.display === 'block') {
        navbar1.style.display = 'none';
        document.getElementById('menu').style.display = 'none';
        HideALL()
    } else {
        navbar1.style.display = 'block';
        document.getElementById('menu').style.display = 'none';
        HideALL()
    }
});


document.getElementById('navbar1').addEventListener('click', function() {
    HideNavbar()
    document.getElementById('menu').style.display = 'block';
});
// end navbar



// switch Bar

