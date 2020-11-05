import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';

import Home from "./components/Home";
import Hello from "./components/Hello";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path=":id" />
        <Color path=":string/:textColor/:backgroundColor" />
      </Router>  
      
    </div>
  );
}

export default App;
