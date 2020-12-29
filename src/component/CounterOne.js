import React, { useReducer } from 'react';

const initinalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'descremenet':
      return state - 1;
    case 'reset':
      return initinalState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initinalState);

  return (
    <div>
        <div>{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('descremenet')}>Descrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  );
}

export default CounterOne;
