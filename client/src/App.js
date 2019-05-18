import React, { Component } from "react";
import Bench from "./Components/bench";
// import Deadlift from "./Components/deadlift";
// import Squat from "./Components/squat";
// import OHPress from "./Components/ohpress";
// import Other from "./Components/other";
import Tabs from "./Components/Tabs";
import Description from "./Components/Description";
import { Provider } from "react-redux";
import NaviBar from "./Components/NaviBar";
import { TabPane, TabContent } from "reactstrap";
import store from "./store";
import { loadUser } from "./actions/authActions";
import PropTypes from "prop-types";

class App extends Component {
  state = { activeTab: "1" };

  static propTypes = {
    loadUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <NaviBar />
          <Tabs toggle={this.toggle} activeTab={this.state.activeTab} />
          <div className="App">
            <div className="mainbody">
              <br />
              <Description />
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Bench />
                </TabPane>

                {/* <TabPane tabId="2">
                  <Deadlift />
                </TabPane>

                <TabPane tabId="3">
                  <Squat />
                </TabPane>

                <TabPane tabId="4">
                  <OHPress />
                </TabPane>

                <TabPane tabId="5">
                  <Other />
                </TabPane> */}
              </TabContent>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
