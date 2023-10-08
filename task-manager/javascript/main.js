var input = window.document.querySelector('#new-task');
var button = window.document.querySelector('#add');
var sel = window.document.querySelector('#sel-task')
var allTtasks = [];

//validações de campos
button.addEventListener('click', function() {
    if (input.value.length == 0) {
        alert('Por favor, preencha os campos corretamentes')
        input.style.background = '#FFC1C4';

        //define um atraso
        setTimeout(function() {
            input.style.background = '';//remove a cor do fundo
        }, 500);
    }else{
        input.style.background = '#D2FFD4';

        setTimeout(function(){
            input.style.background = ''
        }, 500);

        if (allTtasks.includes(input.value)) {
            prompt('Já encontrado na lista!\nDeseja substituir?\n1-Sim\n2-Não')
            if (prompt.value == 2) {
                //break
            }
        }
        allTtasks.push(input.value);
        input.value = ''

        sel.innerHTML = ''

        allTtasks.forEach(function(task) {
        var item = window.document.createElement('option');
        item.textContent = task;
        sel.appendChild(item)
        });

       input.focus();
    }
});

