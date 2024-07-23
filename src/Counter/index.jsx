import { useSelector, useDispatch } from 'react-redux';
import { add, sub } from '../store/countSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(add());
  const handleSub = () => dispatch(sub());
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
};

export default Counter;