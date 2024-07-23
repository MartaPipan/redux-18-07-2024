import TaskForm from './TaskForm';
import TodoList from './TodoList';
import styles from '../Todo/Todo.module.scss'

const Todo = () => {
  return (
    <div className={styles.container}>
      <TaskForm />
      <TodoList />
    </div>
  );
};

export default Todo;