import React, { Component } from 'react';
import Bench from './Components/bench';
import Deadlift from './Components/deadlift';
import Squat from './Components/squat';
import OHPress from './Components/ohpress';
import Other from './Components/other';
import Tabs from './Components/Tabs';
import './App.css'
import NaviBar from './Components/NaviBar';
import { TabPane, TabContent } from 'reactstrap';

class App extends Component {
  state = { activeTab: '1' };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  
  render() {
    return (
      <div>
        <NaviBar />
        <Tabs toggle={this.toggle}
              activeTab={this.state.activeTab}/>
        <div className="App">
          <div className='mainbody'>
            <br />
            <h4>Based on <a href='https://jimwendler.com/'>Wendler's 531 strength program</a></h4>
            <ul> 
              <li>Each week is a different cycle</li>
              <li>Maintain 1rm for all cycles</li>
              <li>Take a deload/rest week to recover</li>
              <li>Increase 1rm by 2.5/5kg and start new cycles</li>
              <li>Divide W-B by 2 to determine how much weight to put on each side of bar</li>
            </ul>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId='1'>
                <Bench />
              </TabPane>

              <TabPane tabId='2'>
                <Deadlift />
              </TabPane>

              <TabPane tabId='3'>
                <Squat />
              </TabPane>
              
              <TabPane tabId='4'>
                <OHPress />
              </TabPane>

              <TabPane tabId='5'>
                <Other />
              </TabPane>
            
            </TabContent>
          </div>
        </div>
      </div>
     
    );
  } 
}

export default App;
