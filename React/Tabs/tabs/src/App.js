import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Content from './components/Content';

function App() {
  const [setIndex, setIndexState] = useState(0)

  const changeValue = (textIndex) => {
    setIndexState(textIndex)
  }

  const textArray = [
    "Tab 1 content is showing here",
    "Tab 2 content is showing here",
    "Tab 3 content is showing here"
  ]
  return (
    <div className="App">
      <Tabs changeValue={() => changeValue(0)} tabLabel="Tab 1" />
      <Tabs changeValue={() => changeValue(1)} tabLabel="Tab 2" />
      <Tabs changeValue={() => changeValue(2)} tabLabel="Tab 3" />
      <p><Content displayText={textArray[setIndex]} /></p>
    </div>
  );
}

export default App;
