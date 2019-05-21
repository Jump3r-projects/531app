import React, { Component } from "react";
import Lift from "./Components/Lift";
import Tabs from "./Components/Tabs";
import Description from "./Components/Description";
import { Provider } from "react-redux";
import NaviBar from "./Components/NaviBar";
import { TabPane, TabContent } from "reactstrap";
import store from "./store";
import { loadUser } from "./actions/authActions";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    activeTab: "1",
    tabs: ["1", "2", "3", "4", "5"],
    liftname: ["Bench", "Squat", "Deadlift", "OH Press", "Other"]
  };

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
    const { liftname, tabs, activeTab } = this.state;
    return (
      <Provider store={store}>
        <div>
          <NaviBar />
          <Tabs
            toggle={this.toggle}
            activeTab={activeTab}
            tabs={tabs}
            liftname={liftname}
          />
          <div className="App">
            <div className="mainbody">
              <br />
              <Description />
              <TabContent activeTab={activeTab}>
                {tabs.map((e, i) => (
                  <TabPane key={i} tabId={e}>
                    <Lift liftname={liftname[e - 1].toUpperCase()} />
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
