import React from "react";
import { useSelector, useDispatch } from "react-redux";



function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCont= useSelector(state => state.showCounter)

  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const IncrementHandeler = () => {
    dispatch({ type: "INCREMESE" ,amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div>
      <h1>Counter</h1>
      {showCont &&  <div>{counter}</div>}
     

      <div>
        <button onClick={Increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={IncrementHandeler}>+5</button>
      </div>
      <button onClick={toggleCounterHandler}>toggle Counter</button>
    </div>
  );
}

export default Counter;
