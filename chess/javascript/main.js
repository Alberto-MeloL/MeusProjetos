var reset = window.document.querySelector('#reset');
var config = window.document.querySelector('#set-up');

//função para exibir/esconder a div
 function hideDiv(e) {
let setUP = window.document.querySelector('.' + e).style.display;
if (setUP === 'none' || setUP === '') {
    window.document.querySelector('.' + e).style.display = 'block';
}else{
    window.document.querySelector('.' + e).style.display = 'none';
}
}
