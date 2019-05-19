import React, { Component } from "react";
import classnames from "classnames";
import { Nav, NavItem, NavLink } from "reactstrap";

class Tabs extends Component {
  render() {
    const { liftname, activeTab, toggle } = this.props;
    return (
      <Nav tabs>
        {this.props.tabs.map((e, i) => (
          <NavItem key={i}>
            <NavLink
              className={classnames({ active: activeTab === e })}
              onClick={() => {
                toggle(e);
              }}
            >
              {liftname[e - 1]}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    );
  }
}

export default Tabs;
