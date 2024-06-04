/*document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
            navbar.style.flexDirection = 'column'; // Ensures the navbar displays in block elements
        }
    });
});*/


  /*  document.getElementById('facebook').querySelector('img').addEventListener('click', function() {
        window.location.href = 'https://www.facebook.com/YourProfile';
    });

    document.getElementById('git').querySelector('img').addEventListener('click', function() {
        window.location.href = 'https://www.github.com/JananiUpeksha';
    });

    document.getElementById('linkedin').querySelector('img').addEventListener('click', function() {
        window.location.href = 'https://www.linkedin.com/in/YourProfile';
    });

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });

    /!*const linkImages = document.querySelectorAll('.link-btnP img');

    linkImages.forEach(img => {
        img.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });*!/
    /!*document.addEventListener('DOMContentLoaded', function() {
        const linkImages = document.querySelectorAll('.link-btnP img');

        linkImages.forEach(img => {
            img.addEventListener('click', function () {
                const url = this.parentElement.getAttribute('data-url');
                if (url) {
                    window.location.href = url; // Navigate to the URL
                }
            });
        });
    });*!/

document.addEventListener('DOMContentLoaded', function() {
    const linkImages = document.querySelectorAll('.link-btnP img');

    linkImages.forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating to the parent elements
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.getElementById('navbar');
    let isMenuVisible = false;

    menuIcon.addEventListener('click', function () {
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
            isMenuVisible = false;
        } else {
            navbar.style.display = 'block';
            navbar.style.flexDirection = 'column'; // Ensures the navbar displays in block elements
            isMenuVisible = true;
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) { // Adjust this value based on your breakpoint
            navbar.style.display = 'flex';
            navbar.style.flexDirection = 'row';
            isMenuVisible = false; // Reset the menu visibility state
        } else if (!isMenuVisible) {
            navbar.style.display = 'none';
        }
    });

    document.getElementById('facebook').querySelector('img').addEventListener('click', function() {
        window.location.href = 'https://www.facebook.com/YourProfile';
    });

    document.getElementById('git').querySelector('img').addEventListener('click', function() {
        window.location.href = 'https://www.github.com/JananiUpeksha';
    });

    document.getElementById('linkedin').querySelector('img').addEventListener('click', function() {
        window.location.href = 'https://www.linkedin.com/in/YourProfile';
    });

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });

    const linkImages = document.querySelectorAll('.link-btnP img');

    linkImages.forEach(img => {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating to the parent elements
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });
});







