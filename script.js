/*humbergur */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

/*contact*/
const form = document.querySelector('.contact-isi');
const nama = document.querySelector('input[name="nama"]');
const email = document.querySelector('input[name="email"]');
const pesan = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', () => {
    alert('Thank you for your message!');

    setTimeout(() => {
        nama.value = '';
        email.value = '';
        pesan.value = '';
    }, 150);
});
