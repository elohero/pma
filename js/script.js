function attachEventHandlers() {
    let logoLink = document.getElementById('logoLink');
    let aboutLink = document.getElementById('aboutLink');

    if (logoLink) {
        logoLink.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (aboutLink) {
        aboutLink.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', attachEventHandlers);