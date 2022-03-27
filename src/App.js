
import React,{useState}  from 'react';
import './App.css';
import Form from './compponents/Form';
import TodoList from './compponents/TodoList';


function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]); 
  const submitTodoHandler=(e)=>{

    setTodos([...todos,
     {text:inputText,complete:false 
        ,id :Math.random()*1000000},]);
    setInputText('');
    console.log('test');
     };
  return (
<div className='App'>
  <header>
    <h1>Mika's To Do List</h1>
</header>
<Form inputText={inputText} setInputText={setInputText} 
submitTodoHandler={submitTodoHandler}/>
<TodoList setTodos={setTodos} todos={todos} />
</div>
  );
}

export default App;
