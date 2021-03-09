import React, { useState } from 'react'
import './App.css';
import SellOrderCreation from './components/SellOrderCreation'

function App() {
  const [state, setState] = useState({ apiResponse: '' })

  async function callAPI() {
    if(state.apiResponse === '' ){
      await fetch("http://localhost:9000/testAPI")
      .then(res => console.log(res.text()))
      .then(res => setState({ apiResponse: res }));
    }
    
  }

  callAPI()

  return (
    <div className="App">
      <SellOrderCreation/>
      <p className="App-intro">;{state.apiResponse}</p>
    </div>
  );
}

export default App;
