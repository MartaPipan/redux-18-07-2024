import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/todoSlice';
import styles from './Todo.module.scss';

const TaskForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(addTask({ ...values }));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={{ content: '', date: '' }} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <Field className={styles.field } name="content" as="input" type="text" placeholder="Task content" />
        <Field classname={styles.field }name="date" type="date" />
        <input type="submit" value="Add Task" />
      </Form>
    </Formik>
  );
};

export default TaskForm;
