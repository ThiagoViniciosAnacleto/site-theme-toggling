'use strict'

const swticher = document.querySelector('.btn');

swticher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Escuro";
    }
    else {
        this.textContent = "Claro";
    }
    console.log('nome da classe: ' + className);
});