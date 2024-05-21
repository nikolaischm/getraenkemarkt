function validateLogin() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    if (username === 'nikolai.schmiederer@gmail.com' && password === 'Nikolai123') {
        window.location.href = 'mydrinks.html';
    } else if (username === 'elke.schmiederer@t-online.de' && password === 'Elke123') {
        window.location.href = 'mydrinks2.html';
    } else if (username === 'martin.schmiederer@t-online.de' && password === 'Martin123') {
        window.location.href = 'mydrinks3.html';
    } else if (username === 'amelie.schmiederer@t-online.de' && password === 'Amelie123') {
        window.location.href = 'mydrinks4.html';
    } else {
        alert('Falsche E-Mail-Adresse oder falsches Passwort!');
    }
}
