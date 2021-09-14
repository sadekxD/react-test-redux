import { FormControl, Button } from "react-bootstrap";
import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{ flexDirection: "column" }}
    >
      <h1 data-testid="header" className="mb-4">
        My Counter
      </h1>

      <h1 className="my-4" data-testid="counter">
        {counterValue}
      </h1>

      <div className="d-flex align-items-center">
        <Button data-testid="subtract-btn" onClick={subtractFromCounter}>
          -
        </Button>
        <FormControl
          type="number"
          data-testid="input"
          value={inputValue}
          onChange={(e) => {
            setInputValue(parseInt(e.target.value));
          }}
        />
        <Button data-testid="add-btn" onClick={addToCounter}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
