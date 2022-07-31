import './styles.css';
import Todo from './classes/todo.class';
import TodoList from './classes/todo-list.class';
import crearTodoHTML from './js/componentes';

 const todoList = new TodoList();

/*
const tarea = new Todo('Aprender Javascript!!!');
tarea.completado = false;
todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHTML(tarea);
*/


/*
setTimeout( ()=>{
    localStorage.removeItem('mi-key');
},1500  )//Se diapra la acción en 1500mS
*/


//todoList.todos.forEach( todo => crearTodoHTML(todo));
todoList.todos.forEach( crearTodoHTML);

export default todoList;