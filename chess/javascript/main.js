var reset = window.document.querySelector('#reset');
var config = window.document.querySelector('#set-up');
var start = window.document.querySelector('#start');
var startMatch = window.document.querySelector('.startMatch');
var namePlayer1 = window.document.querySelector('#namePlayer-1');
var namePlayer2 = window.document.querySelector('#namePlayer-2');
var okName = window.document.querySelector('#okName');

//adicionando um ouvindo ao start

start.addEventListener('click', function() {
    startMatch.style.display = 'block';
    namePlayer1.style.display = 'block';
    namePlayer2.style.display = 'block';
    okName.style.display = 'block';

    setTimeout(function() {
        startMatch.style.display = 'none';
        namePlayer1.style.display = 'none';
        namePlayer2.style.display = 'none';
        okName.style.display = 'none';
    }, 12000);
});

okName.addEventListener('click', function(){
   
        startMatch.style.display = 'none';
        namePlayer1.style.display = 'none';
        namePlayer2.style.display = 'none';
        okName.style.display = 'none';
});

//terminar validacoes de campos vazios para comecar a parida<-