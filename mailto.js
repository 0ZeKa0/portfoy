document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Form submitini engelle

        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // E-posta adresi ve mesajı içeren mailto linki oluştur
        var mailtoLink = 'mailto:zehrakarakayabm@gmail.com' +
            '?subject=' + encodeURIComponent('New Message from Contact Form') +
            '&body=' + encodeURIComponent('Email: ' + email + '\n\nMessage: ' + message);

        // Mailto linkini aç
        window.location.href = mailtoLink;
    });
});
