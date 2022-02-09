import { Todo } from './Todo.js';
let todolist = [];
$(() => {
    stampaTodo();
    let button = $('.todo button');
    button.on('click', function () {
        let titolo = $('#titolo');
        let testo = $('#testo');
        let todo = new Todo(titolo.val(), testo.val());
        todolist.push(todo);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
        stampaTodo();
    });
})

function stampaTodo() {
    let lista = $('.lista ul');
    lista.empty();
    let localLista = localStorage.getItem('listaTodo');
    if (localLista != null) {
        todolist = JSON.parse(localLista);
    };
    for(let todo in todolist) {
        lista.append(`
        <li>${todolist[todo].titolo} - ${todolist[todo].testo}
        <span class="btn btn-sm btn-danger float-end" id="remove${todo}">X</span>
        </li>
        `);
        $(`#remove${todo}`).on('click',function(){
            todolist.splice(todo, 1);
            localStorage.setItem('listaTodo', JSON.stringify(todolist));
            stampaTodo();
        })
    }
}