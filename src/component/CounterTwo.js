import React, { useReducer } from 'react';

const initinalState = {
  firstCounter: 0,
  secendCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'descremenet':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secendCounter: state.secendCounter + action.value };
    case 'descremenet2':
      return { ...state, secendCounter: state.secendCounter - action.value };
    case 'reset':
      return initinalState;
    default:
      return state.firstCounter;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initinalState);

  return (
    <div>
      <div>First Counter {count.firstCounter}</div>
      <div>First Counter {count.secendCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: 'descremenet', value: 1 })}>
        Descrement
      </button>
      <button onClick={() => dispatch({ type: 'descremenet2', value: 1 })}>
        Descrement2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
