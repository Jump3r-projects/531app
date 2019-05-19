import React, { Component } from "react";
import Cycles from "./cycle/Cycles";
import { Container } from "reactstrap";
import CycleButtons from "./cycle/CycleButtons";
import Inputs from "./inputs/Inputs";

class Lift extends Component {
  render() {
    const { liftname } = this.props;
    return (
      <Container className="body">
        <div className="liftHeader">{liftname}</div>
        <Inputs />
        <CycleButtons />
        <Cycles />
      </Container>
    );
  }
}

export default Lift;
