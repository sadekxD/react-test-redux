import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/actions";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="mx-auto my-5 d-flex align-items-center justify-content-between"
        style={{ maxWidth: 300 }}
      >
        <Button onClick={() => dispatch(decrement())}>DEC -</Button>
        <div>
          <h1>{counter}</h1>
        </div>
        <Button onClick={() => dispatch(increment())}>INC +</Button>
      </div>
    </div>
  );
};

export default Counter;
