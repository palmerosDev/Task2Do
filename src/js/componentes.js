import Todo from '../classes/todo.class';
import TodoList from '../classes/todo-list.class';
import todoList from '../index';


// referencias en DOM
const divToDoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFilter      = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

const crearTodoHTML = ( todo ) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divToDoList.append(div.firstElementChild);
    
    return div;
}

txtInput.addEventListener('keyup',(event)=>{
    if( event.keyCode === 13 && txtInput.value.length > 0){
        //console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';

        //console.log(todoList);
    } // La persona presionó enter
});

divToDoList.addEventListener('click', (event)=>{
    const nombreElemento = event.target.localName;
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    console.log(todoElemento);

    if( nombreElemento.includes('input') ){ // click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if( nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divToDoList.removeChild(todoElemento);
    }

    console.log(todoList);

});


btnBorrar.addEventListener('click',() => {
    todoList.eliminarCompletados();
    const arrayToDoHTML = divToDoList.children;
    console.log(arrayToDoHTML);
    console.log(typeof arrayToDoHTML)
    for(let i = divToDoList.children.length-1; i>=0; i--){
        console.log(arrayToDoHTML[i]);
        if( arrayToDoHTML[i].classList.contains("completed")){
            const idEliminate = arrayToDoHTML[i].getAttribute('data-id');
            todoList.eliminarTodo(idEliminate);
            divToDoList.removeChild(arrayToDoHTML[i]);
        }

    }
});

ulFilter.addEventListener('click',(event)=>{
    const filtro = event.target.text;
    console.log(filtro);
    if( !filtro ){
        return;
    }

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));

    event.target.classList.add('selected');



    for(const elemento of divToDoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes': 
                if( completado ){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
                break;
                
                
                
        }

    }


});








export default crearTodoHTML;