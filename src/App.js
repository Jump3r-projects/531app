import React, { Component } from 'react';
import Bench from './Components/bench';
import './App.css'
import NaviBar from './Components/NaviBar';

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar />
        <div className="App">
          <div>
            <header className="App-header"></header>
          </div>
          <div>
            <Bench className="Bench"/>
          </div>
        </div>
      </div>
     
    );
  } 
}

export default App;
