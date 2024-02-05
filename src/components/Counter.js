import React from 'react';

const Counter = ({ count, clicks, onDecrement, onIncrement }) => {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <div>
        Times the increment/decrement buttons have been clicked: {clicks}
      </div>
    </div>
  );
};

export default Counter;
