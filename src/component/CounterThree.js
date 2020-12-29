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

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initinalState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initinalState);

  return (
    <div>
        <div>{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('descremenet')}>Descrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <div>{countTwo}</div>
      <button onClick={()=>dispatchTwo('increment')}>Increment</button>
      <button onClick={()=>dispatchTwo('descremenet')}>Descrement</button>
      <button onClick={()=>dispatchTwo('reset')}>Reset</button>
    </div>
  );
}

export default CounterThree;
