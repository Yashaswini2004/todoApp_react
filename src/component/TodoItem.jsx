import React from "react";
import TodoList from "./TodoList";
import styles from "./todolist.module.css";
export default function TodoItem({ todos,setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item, index) => (
        <TodoList key={index.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

