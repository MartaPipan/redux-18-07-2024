import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/todoSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(addTask({...values}));
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ content: '', date: '' }} onSubmit={onSubmit}>
      <Form>
        <Field name="content" />
        <Field name="date" type="date" />
        <input type="submit" />
      </Form>
    </Formik>
  );
};

export default TaskForm;