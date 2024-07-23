import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { sortByDate } from '../../store/todoSlice';
import styles from './Todo.module.scss';

const TodoList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const showTasks = (task) => <Task key={task.id} task={task} />;
  const handleSortByDate = () => { dispatch(sortByDate()) };

  return (
    <section className={styles.todoList}>
      <h2>Tasks List</h2>
      <button onClick={handleSortByDate}>Sort by Date</button>
      {tasks.map(showTasks)}
    </section>
  );
};

export default TodoList;
