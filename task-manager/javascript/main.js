var input = window.document.querySelector('#new-task');//valor da entrada
var button = window.document.querySelector('#add');//boato de adicionar tarefas
var sel = window.document.querySelector('#sel-task');//select 
var remove = window.document.querySelector('#removed');
var allTtasks = [];//array tarefas

//validações de campos
button.addEventListener('click', function () {
    if (input.value.length == 0) {
        alert('Por favor, preencha os campos corretamente!')
        input.style.background = '#FFC1C4';
        input.focus();

        //define um atraso
        setTimeout(function () {
            input.style.background = '';//remove a cor do fundo
        }, 500);
    } else {
        input.style.background = '#D2FFD4';

        setTimeout(function () {
            input.style.background = ''
        }, 500);

        if (allTtasks.includes(input.value)) {
            prompt('Já encontrado na lista!\nDeseja substituir?\n1-Sim\n2-Não')
            if (prompt.value == 1) {
                //break

            } else if (prompt.value == 2) {

            }
        }
        allTtasks.push(input.value);
        input.value = ''//limpa a input

        sel.innerHTML = '';//limpa as options

        allTtasks.forEach(function (task) {
            var item = window.document.createElement('option');//cria um elemento (option)
            item.textContent = task;//define o contexto
            sel.appendChild(item)//adiciona como filho ao sel
        });
        input.focus();//mantem a input com foco
    }

});

//remoção de tarefas
remove.addEventListener('click', function () {
    if (sel.value == 0) {
        alert('Ainda não há nenhuma tarefa.')
    } else {
        var valorPrompt = prompt('Digite a tarefa a ser removida');

        //encontra o indice do valor no arry
        var index = allTtasks.indexOf(valorPrompt);

        if (index !== -1) {
            //remove o elemento pelo indice encontrado
            allTtasks.splice(index, 1);
            //sintaxe array.splice(start(index), deleteCount(1), item1, item2, ...);
            window.document.querySelector('#message').textContent = 'Produto removido!';
            window.document.querySelector('#message').style.color = '#008000';
            window.document.querySelector('#message').style.display = 'block';

            setTimeout(function () {
                window.document.querySelector('#message').style.display = 'none';
            }, 2000);
            //atualiza as options
            sel.innerHTML = ''
            allTtasks.forEach(function (task) {
                var item = window.document.createElement('option');
                item.textContent = task;
                sel.appendChild(item)
            });
        } else {
            alert(`Produto não encontrado na lista [${valorPrompt}]`);
        }
    }
});
