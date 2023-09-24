import { TodoItem } from "./TodoItem"

export function TodoList ({ todos, toggleTodo, deleteTodo }) {
    return (
      <ul className="list">
        {todos.length === 0 && "No Todos Yet!"}
        {todos.map(todo => {
          return (
            <TodoItem
            //  id={todo.id} 
            //  compleated={todo.completed} 
            //  title={todo.title}  or you can just spread out your todo            
             {...todo}
             key={todo.id}
             toggleTodo={toggleTodo}
             deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>  
    )
}