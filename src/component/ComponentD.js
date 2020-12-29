import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD() {
  const { countDispatch, countState } = useContext(CountContext);
  return (
    <div>
      componentD - {countState}
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('descremenet')}>Descrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentD;
