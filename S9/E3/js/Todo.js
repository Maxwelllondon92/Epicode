export class Todo {
    constructor(titolo, testo, index) {
        this.titolo = titolo;
        this.testo = testo;
        this.index = index;
    }
    write() {
        let todolist = JSON.parse(localStorage.getItem('listaTodo'));
        todolist.push(this);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
    }
    remove(index) {
        let todolist = JSON.parse(localStorage.getItem('listaTodo'));
        todolist.splice(index, 1);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
    }
}
