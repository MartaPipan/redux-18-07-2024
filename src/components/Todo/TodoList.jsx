import { useSelector } from "react-redux";
import Task from "./Task";

const TodoList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const showTasks = (task) => <Task key={task.id} task={task} />;

  return (
    <section>
      <h2>tasks list</h2>
      {tasks.map(showTasks)}
    </section>
  );
  
};

export default TodoList;
