import React from "react";
import styles from "./todoItem.module.css";
export default function TodoList({ item,todos,setTodos}) {
  function handleDelete(item){
    console.log("Button Clicked was",item);
    setTodos(todos.filter((todo)=> todo!==item));
  }
  function handleClick(name)
  {
      const newtodo=todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo);
      setTodos(newtodo);
      
  }
  const lineStrike=item.done?styles.completed:"";
  return <div className={styles.item}>
    <div className={styles.itemName}>
      <span className={lineStrike} onClick={()=>handleClick(item.name)}>{item.name}</span>
      <span ><button onClick={()=>handleDelete(item)} className={styles.deleteButton}>X</button></span>
      </div>
      <hr className={styles.line}/>
      </div>;
}
