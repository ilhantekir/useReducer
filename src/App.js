import React, { useReducer } from 'react';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';
//import CounterOne from './component/CounterOne';
// import CounterTwo from './component/CounterTwo';
//import CounterThree from './component/CounterThree';

export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initinalState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
