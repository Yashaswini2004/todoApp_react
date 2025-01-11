import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]); 
   const completeTodo=todos.filter((todo)=>todo.done).length;
   const totalTodo=todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoItem todos={todos} setTodos={setTodos}/>
      <Footer completeTodo={completeTodo} totalTodo={totalTodo}/>
    </div>
  );
}
