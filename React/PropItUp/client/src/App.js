import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCardFunction from './components/PersonCardFunction';


function App() {
  
  return (
    //<div className="App">
    //  <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
    //  <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
    //  <PersonCard lastName="Smith" firstName="Maria" age={55} hairColor="Brown" />
    //  <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown" />
    //
    //</div>

    <div>
        <PersonCardFunction lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
        <PersonCardFunction lastName="Smith" firstName="John" age={88} hairColor="Brown" />
        <PersonCardFunction lastName="Smith" firstName="Maria" age={55} hairColor="Brown" />
        <PersonCardFunction lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown" />

    </div>
  );
}

export default App;
