import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export function Todo(){
  let[Newtask, setNewtask] = useState("");
  let [Todos, setTodos] = useState([]);

  function addTasks()
  {
    setTodos((prevTodos) => {
      return [...prevTodos, {task: Newtask, id:uuidv4(), isDone:false}]
    })
    setNewtask("");
  }

  function removeTask(key) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== key));
  }
  

  let markAsDone = (key) =>
  {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        if(todo.id == key)
        {
          return {...todo, isDone: true,};
        }
        else
        {return todo;}
      })
    );
  };

  function allDone()
  {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        return {...todo, isDone:true};
      })
    )
  }

    return(
        <>
        <h1>To-Do List</h1>
        <input 
        name="nt" 
        placeholder="New Task" 
        style= {{marginRight: "1rem", width:"12rem", height:"1.5rem",fontSize:"large"}}
        value={Newtask}
        onChange={(event) => setNewtask(event.target.value)}
        >
        </input>
        <button onClick={addTasks}>Add</button>
        <h3>Tasks to do-</h3>
        <ol>
          {
          Todos.map((item) => {
          return <li key={item.id}>
          < span style = {item.isDone ? {textDecoration: "line-through"}: {}}>
          {item.task}
          </span>
          &nbsp; &nbsp; &nbsp;
          <button onClick={() => (removeTask(item.id))}>Delete</button>
          &nbsp; &nbsp; &nbsp;
          <button onClick={() => (markAsDone(item.id))}>Mark As Done</button>
          </li>
          })
          }
        </ol>
        <button onClick={allDone}>Mark All as Done</button>
        </>
    )
}