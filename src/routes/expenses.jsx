import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../stores/counterSlice";

export default function Expenses() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </main>
  );
}