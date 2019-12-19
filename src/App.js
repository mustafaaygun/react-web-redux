import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement,signIn,signOut } from './actions'
function App() {
  const { counter, isLogged } = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      {isLogged ? <h3>Valuable Info</h3> : null}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(signIn())}>Sign In</button>
      <button onClick={()=>dispatch(signOut())}>Sign Out</button>
    </div>
  );
}

export default App;
