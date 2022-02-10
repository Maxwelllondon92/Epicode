import { Todo } from './Todo.js';

$(() => {
    stampaTodo();
    let button = $('.todo button');
    button.on('click', function () {
        let titolo = $('#titolo');
        let testo = $('#testo');
        let todo = new Todo(String(titolo.val()), String(testo.val()));
        todo.write();
        stampaTodo();
    });
})

function stampaTodo() {
    let lista = $('.lista ul');
    lista.empty();
    let todolist:any[] = JSON.parse(localStorage.getItem('listaTodo'));
    for(let i=0;i<todolist.length;i++) {
        let todo = new Todo(todolist[i].titolo,todolist[i].testo,i)
        lista.append(`
        <li>${todo.titolo} - ${todo.testo}
        <span class="btn btn-sm btn-danger float-end" id="remove${i}">X</span>
        </li>
        `);
        $(`#remove${i}`).on('click',function(){
            todo.remove(i)
            stampaTodo();
        })
    }
}