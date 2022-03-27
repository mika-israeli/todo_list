
import React from 'react';

function Form({setInputText,inputText,setTodos,todos,submitTodoHandler}) {
 const inputTextHandler =(e)=>{
    setInputText(e.target.value);
 };
 
  return (
  <form>
    <input value={inputText} onChange={inputTextHandler} type=" text" 
    className="todo-input"/>
    <button onClick={submitTodoHandler} className="todo-button" type="submit" >
        <i className="fas fa-plus-square"></i>   
    </button>
</form>

);
}

export default Form;
