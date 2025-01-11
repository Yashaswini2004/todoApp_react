import styles from "./footer.module.css";
export default function Footer({completeTodo, totalTodo}){
    return <div className={styles.footer}>
        <span className={styles.item}>Number of Completed todos:-{completeTodo}</span>
        <span className={styles.item}>         Total todos:-{totalTodo}</span>
    </div>
}