import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => { };

  const decrHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const incrHandler = () => {
    dispatch({ type: 'increment' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrHandler}>Incr</button>
        <button onClick={decrHandler}>Decr</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
