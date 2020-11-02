import React, {useState } from "react";

import Results from "./components/Results";
import UserForm from './components/UserForm';

function App() {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })


  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
