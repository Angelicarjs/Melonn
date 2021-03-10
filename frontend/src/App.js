import React, { useState } from 'react'
import './App.css';
import SellOrderCreation from './components/SellOrderCreation'
import SellOrderList from './components/SellOrderList'
import SellOrderDetails from './components/SellOrderDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { 
  Button
} from './components/styledComponents'

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

      <Router>
      <div style={{width:'100%', backgroundColor: '#f8f9fa', height: '5em', display:'flex', justifyContent:'space-around'}}>
      <a className="navbar-brand">
        <img width='50%' src= 'https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/6006fbca47ec77fa015be5c6_logo-melonn.png'/>
      </a>
      <Button class="btn btn-outline-success my-2 my-sm-0" style={{height:'4em'}} >
        <Link to="/sellOrderList">
          Sell Order List
        </Link>
      </Button>
      <Button class="btn btn-outline-success my-2 my-sm-0" style={{height:'4em'}}>
        <Link to="/sellOrderDetails">
          Sell Order Details
        </Link>
      </Button>
      <Button class="btn btn-outline-success my-2 my-sm-0"style={{height:'4em'}} >
        <Link to="/sellOrderCreation">
          Sell Order Creation
        </Link>
      </Button>
      </div>
      

      <Switch>
          <Route path="/sellOrderList">
            <SellOrderList />
          </Route>
          <Route path="/sellOrderDetails">
            <SellOrderDetails />
          </Route>
          <Route path="/sellOrderCreation">
            <SellOrderCreation />
          </Route>
        </Switch>

    </Router>

      <p className="App-intro">;{state.apiResponse}</p>
    </div>
  );
}

export default App;
