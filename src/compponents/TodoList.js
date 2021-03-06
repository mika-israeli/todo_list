
import React from 'react';
import Todo from './Todo';
function TodoList({todos,setTodos}) {
    
  return (
  <div className="todo-container">
  <ul className="todo-list">
  {todos.map((todo) =>(
    <Todo setTodos={setTodos} key={todo.id} todo={todo}
    text={todo.text} todos={todos}/>
  ))}
  </ul>
  </div>
);
};

export default TodoList;

