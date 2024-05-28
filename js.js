 document.addEventListener('DOMContentLoaded', function () {
     const menuIcon = document.getElementById('menuIcon');
     const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
    if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
    } else {
    navbar.style.display = 'block';
    navbar.style.flexDirection = 'column'; // Ensures the navbar displays in blockline elements
    }
  });
});


 document.getElementById('facebook').querySelector('img').addEventListener('click', function() {
     window.location.href = 'https://www.facebook.com/YourProfile';
 });

 document.getElementById('#git').querySelector('img').addEventListener('click', function() {
     window.location.href = 'https://www.github.com/JananiUpeksha';
 });

 document.getElementById('linkedin').querySelector('img').addEventListener('click', function() {
     window.location.href = 'https://www.linkedin.com/in/YourProfile';
 });


