import Todo from './todo.class';




class TodoList{

    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    
    eliminarTodo( id ){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){
        for(const todo of this.todos){

            if( todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));// RRROR xq this.todos no es string

    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo'))
                        ?JSON.parse(localStorage.getItem('todo'))
                        :[];
        /*if ( localStorage.getItem('todo')){

            this.todos = JSON.parse(localStorage.getItem('todo'));

            console.log('cargarLocal',this.todos);

        }else{
            this.todos = [];
        */

        /*
        this.todos = this.todos.map((literalTodo)=>{
            return Todo.fromJSON(literalTodo);
        });
        */

        this.todos = this.todos.map(Todo.fromJSON);

    }
}

export default TodoList;