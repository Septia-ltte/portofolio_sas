const form = document.querySelector('.contact-form');
const nama = document.querySelector('input[name="nama"]');
const email = document.querySelector('input[name="email"]');
const pesan = document.querySelector('textarea[name="pesan"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    nama.value = '';
    email.value = '';
    pesan.value = '';
});
