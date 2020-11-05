import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';

function App() {
  const [state, setState] = useState([
    //{ color: "red", height: 200, width: 200 },
    //{ color: "yellow", height: 200, width: 200 },
    //{ color: "blue", height: 200, width: 200 },
    //{ color: "black", height: 200, width: 200 },
  ])


  return (
    <div className="App">
      <BoxForm state={state} setState={setState} />
      <div className="BoxArea">
        {state.map((box, i) => (
          <Box key={i} color={box.color} height={box.height} width={box.width} />
        ))}
      </div>
    </div>
  );
}

export default App;
