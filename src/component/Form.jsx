import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); 
    setTodo({name:"",done:false}); 
  }

  return (
    <div className={styles.inputContainer}>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          placeholder="Enter a todo"
        />
        <button className={styles.modernButton} type="submit">Add</button>
      </form>
    </div>
  );
}
