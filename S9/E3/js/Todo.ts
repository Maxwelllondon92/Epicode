export class Todo {
    titolo:string;
    testo:string;
    index:number;
    constructor(titolo:string, testo:string, index?:number) {
        this.titolo = titolo;
        this.testo = testo;
        this.index = index;
    }
    write():void{
        let todolist:any[] = JSON.parse(localStorage.getItem('listaTodo'));
        todolist.push(this);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
    }
    remove(index):void{
        let todolist:any[] = JSON.parse(localStorage.getItem('listaTodo'));
        todolist.splice(index,1)
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
    }
} 