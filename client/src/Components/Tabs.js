import React, { Component } from "react";
import classnames from "classnames";
import { Nav, NavItem, NavLink } from "reactstrap";

class Tabs extends Component {
  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === "1" })}
            onClick={() => {
              this.props.toggle("1");
            }}
          >
            Bench
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === "2" })}
            onClick={() => {
              this.props.toggle("2");
            }}
          >
            Deadlift
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === "3" })}
            onClick={() => {
              this.props.toggle("3");
            }}
          >
            Squat
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === "4" })}
            onClick={() => {
              this.props.toggle("4");
            }}
          >
            OH Press
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === "5" })}
            onClick={() => {
              this.props.toggle("5");
            }}
          >
            Other
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default Tabs;
