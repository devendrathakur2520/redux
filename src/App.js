
import React from 'react';
import {useSelector,useDispatch} from 'react-redux'

import {incNumber ,decNumber} from './Action/index.js'


function App() {
  const myState = useSelector((state) => state.changeNumber );
  const dispatch=useDispatch();
  return (
        <div>
            <button onClick={() => dispatch(incNumber())}>Increment</button>
            <input type ="text" value={myState}/>
            <button onClick={() => dispatch(decNumber())}>Decrement</button>

        </div>
     
  );
}

export default App;
