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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
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
          <div>
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
